import mongoose from 'mongoose'
import { logger } from './logger'

/** Callback type for establishing or re-establishing mongo connection */
interface IOnConnectedCallback {
  (): void
}

/** Singleton instance of MongoConnection */
let mongoConnection: MongoConnection | null = null

/**
 * A Mongoose Connection wrapper class to help with mongo connection issues.
 * This library handles auto-reconnection to MongoDB without crashing the server.
 * It implements a singleton pattern to ensure only one connection instance exists.
 */
export default class MongoConnection {
  /** MongoDB connection URL */
  private readonly mongoUrl: string
  /** Callback function to execute when mongo connection is established or re-established */
  private onConnectedCallback: IOnConnectedCallback = () => { }
  /** Flag to track if connection was previously established */
  private isConnectedBefore: boolean = false
  /** Counter for connection retry attempts */
  private reconnectAttempts: number = 0
  /** Maximum number of reconnection attempts before giving up */
  private readonly maxReconnectAttempts: number = 5
  /** Time interval between reconnection attempts in milliseconds */
  private readonly reconnectInterval: number = 2000

  /** MongoDB connection options for Mongoose */
  private readonly mongoConnectionOptions: mongoose.ConnectOptions = {
    serverSelectionTimeoutMS: 5000, // Time to wait for server selection before timeout
    socketTimeoutMS: 45000,         // Time to wait for socket operations before timeout
  }

  /**
   * Initialize mongo connection
   * @param mongoUrl - MongoDB connection URL
   */
  constructor(mongoUrl: string) {
    // Enable Mongoose debug mode in development
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', true)
    }

    this.mongoUrl = mongoUrl
    const connection = mongoose.connection

    // Setup MongoDB event handlers
    connection.on('error', this.onError)
    connection.on('disconnected', this.onDisconnected)
    connection.on('connected', this.onConnected)
    connection.on('reconnected', this.onReconnected)
  }

  /**
   * Get singleton instance of MongoConnection
   * @throws Error if MONGODB_URI environment variable is not set
   */
  public static getInstance(): MongoConnection {
    if (!mongoConnection) {
      const mongoUrl = process.env.MONGODB_URI
      if (!mongoUrl) {
        throw new Error('MONGODB_URI not found in environment variables')
      }
      mongoConnection = new MongoConnection(mongoUrl)
    }
    return mongoConnection
  }

  /**
   * Close the MongoDB connection
   * Resets connection state and retry counters
   */
  public async close(): Promise<void> {
    logger.log({
      level: 'info',
      message: 'Closing the MongoDB connection'
    })

    try {
      await mongoose.connection.close()
      this.isConnectedBefore = false
      this.reconnectAttempts = 0
    } catch (err) {
      logger.log({
        level: 'error',
        message: `Error closing MongoDB connection: ${err}`
      })
      throw err
    }
  }

  /**
   * Initialize MongoDB connection
   * @param onConnectedCallback - Callback function to execute after connection is established
   */
  public connect(onConnectedCallback: IOnConnectedCallback): void {
    this.onConnectedCallback = onConnectedCallback
    this.startConnection()
  }

  /**
   * Start or resume MongoDB connection
   * Checks if connection is already established before attempting new connection
   */
  private startConnection = async () => {
    // Check if already connected
    if (mongoose.connection.readyState === 1) {
      logger.log({
        level: 'info',
        message: 'MongoDB connection already established'
      })
      this.onConnectedCallback()
      return
    }

    logger.log({
      level: 'info',
      message: `Connecting to MongoDB at ${this.mongoUrl}`
    })

    try {
      await mongoose.connect(this.mongoUrl, this.mongoConnectionOptions)
    } catch (err) {
      logger.log({
        level: 'error',
        message: `Failed to connect to MongoDB: ${err}`
      })
      this.handleConnectionError()
    }
  }

  /**
   * Handle connection errors and implement retry logic
   * Attempts to reconnect up to maxReconnectAttempts times
   */
  private handleConnectionError = () => {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++
      logger.log({
        level: 'info',
        message: `Retrying mongo connection (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`
      })
      setTimeout(() => {
        this.startConnection()
      }, this.reconnectInterval)
    } else {
      logger.log({
        level: 'error',
        message: 'Max reconnection attempts reached. Please check your MongoDB connection.'
      })
    }
  }

  /**
   * Handler for successful MongoDB connection
   * Resets retry counter and executes callback
   */
  private onConnected = () => {
    this.reconnectAttempts = 0
    this.isConnectedBefore = true
    logger.log({
      level: 'info',
      message: `Connected to MongoDB at ${this.mongoUrl}`
    })
    this.onConnectedCallback()
  }

  /**
   * Handler for successful MongoDB reconnection
   * Resets retry counter and executes callback
   */
  private onReconnected = () => {
    this.reconnectAttempts = 0
    logger.log({
      level: 'info',
      message: 'Reconnected to MongoDB'
    })
    this.onConnectedCallback()
  }

  /**
   * Handler for MongoDB connection errors
   * Triggers reconnection attempt
   */
  private onError = (error: Error) => {
    logger.log({
      level: 'error',
      message: `MongoDB connection error: ${error.message}`
    })
    this.handleConnectionError()
  }

  /**
   * Handler for MongoDB disconnection events
   * Triggers reconnection attempt
   */
  private onDisconnected = () => {
    logger.log({
      level: 'warn',
      message: 'MongoDB disconnected'
    })
    this.handleConnectionError()
  }
}

/**
 * Helper function for use in Next.js API routes and server components
 * Returns a promise that resolves with both the connection instance and mongoose
 */
export async function connectDB(): Promise<{ connection: MongoConnection; mongoose: typeof mongoose }> {
  const connection = MongoConnection.getInstance();
  return new Promise((resolve) => {
    connection.connect(() => {
      resolve({ connection, mongoose });
    });
  });
}
