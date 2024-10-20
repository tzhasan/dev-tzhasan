import { connectDb } from "@/lib/connenctDb"
import { NextResponse } from "next/server"
import { data } from "../../../../public/data";

export const POST = async (request) => {
  const newUser = await request.json()
  try {
    const db = await connectDb()
    const userCollections = await db.collection("users")
    const profilesCollections = await db.collection("profiles")
    const exist = await userCollections.findOne({ email: newUser.email })
    if (exist) { 
      return NextResponse.json({message: "User already exists"},{status:201})
    }
    // 
    const initialProfileData  = await profilesCollections.insertOne({...data,email: newUser.email})
    // 
    // const hashPassword = bcrypt.hashSync(newUser?.password, 20);
    const response = await userCollections.insertOne({ ...newUser, password: newUser?.password })
    // const hashPassword = bcrypt.hashSync(newUser.password, 20);
    // const response = await userCollections.insertOne({ ...newUser, password: hashPassword })
     if (response && initialProfileData) {
       return NextResponse.json(
         { message: "User and Profile successfully created" },
         { status: 200 }
       );
     } else {
       throw new Error("Failed to create user or profile");
     }
    // return NextResponse.json({message: "User successfully Created"},{status:200})

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}