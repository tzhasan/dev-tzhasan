import { connectDb } from "@/lib/connenctDb"
import bcrypt from "bcrypt";
import { NextResponse } from "next/server"

export const POST = async (request) => {
  const newUser = await request.json()
  try {
    const db = await connectDb()
    const userCollections = await db.collection("users")
    const exist = await userCollections.findOne({ email: newUser.email })
    if (exist) { 
      return NextResponse.json({message: "User already exists"},{status:201})
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 20);
    const response = await userCollections.insertOne({ ...newUser, password: hashPassword })
    return NextResponse.json({message: "User successfully Created"},{status:200})

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}