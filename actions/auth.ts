"use server"

import * as z from "zod"

import { LoginSchema } from "@/schemas"
import { RegisterSchema } from "@/schemas"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)
  if (!validateFields.success) {
    return { error: "Invalid Fields" }
  }
  return { success: "Email sent!" }
}

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: "Invalid Fields" }
  }

  return { success: "Email sent!" }
}
