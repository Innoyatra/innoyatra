import { connectDB } from "@/lib/mongoConnection";
import { User } from "@/models/User";

export const getUserByEmail = async (email: string) => {
  const { mongoose } = await connectDB();
  const user = await User.findOne({ email });
  return user;
}
