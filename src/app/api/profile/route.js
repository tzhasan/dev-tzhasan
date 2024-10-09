import { connectDb } from "@/lib/connenctDb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL
  const db = await connectDb()
  const profileCollection = await db.collection('profiles')
  try {
    const result = await profileCollection.findOne({ email: userEmail })
    return NextResponse.json({message:"Profile Found Successfully",result},{status:200})
  } catch (error) {
    return NextResponse.json({message:"Profile Found Failed"},{status:400})
  }
} 

export const PATCH = async (request,{params}) => { 
  const db = await connectDb()
  const profileCollection = await db.collection('profiles')
  const updateDoc = await request.json()
  try {
    const res = await profileCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
         $set: {
           ...updateDoc,
         },
      }
    )
    return NextResponse.json({ message: 'Profile updated successfully',response: res})
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" },error);
  }

}