import mongoose, { Document, Model, Schema, model } from 'mongoose'
import { hashSync, genSaltSync, compareSync } from 'bcrypt'

// Define the IUser interface
export interface IUser extends Document {
  email: string
  password: string
  createdOn: Date
  updatedOn: Date
  encryptPassword: (password: string) => string
  validPassword: (password: string) => boolean
}

interface IUserModel extends Model<IUser> { }

// Define the User schema
const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdOn: { type: Date, required: true, default: Date.now },
  updatedOn: { type: Date, required: true, default: Date.now },
})

// Add methods for password encryption and validation
UserSchema.methods.encryptPassword = (password: string) => hashSync(password, genSaltSync(10))

UserSchema.methods.validPassword = function(password: string) {
  return compareSync(password, this.password)
}

// Helper function with correct type parameters
function getModel<T extends Document, U extends Model<T>>(
  modelName: string,
  schema: mongoose.Schema
): U {
  const model = (mongoose.models[modelName] || mongoose.model<T>(modelName, schema)) as U
  return model
}

// Or more simply, just modify your model declaration:
export const User = (mongoose.models.User || mongoose.model<IUser>('User', UserSchema)) as Model<IUser, IUserModel>
