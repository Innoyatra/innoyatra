"use server"

import * as z from "zod"

import { LoginSchema } from "@/schemas"
import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { User } from "@/models/User"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)
  if (!validateFields.success) {
    return { error: "Invalid Fields" }
  }

  const { email, name, password } = validateFields.data

  const existingUser = await getUserByEmail(email)
  if (existingUser) return { error: "Email already in use" }

  const user = new User({
    email,
    password: '',
    createdOn: new Date(),
  })

  user.password = user.encryptPassword(password)

  await user.save()

  return { success: "Email sent!" }
}

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: "Invalid Fields" }
  }

  return { success: "Email sent!" }
}
