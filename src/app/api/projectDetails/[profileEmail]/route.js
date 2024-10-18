import { connectDb } from "@/lib/connenctDb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDb()
  const profileCollection = await db.collection('profiles')
  try {
   const result = await profileCollection.findOne({ email: params?.profileEmail });

    if (result) {
       const projects = result.projects
      return NextResponse.json(
        { message: "Profile Found Successfully", projects },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Projects Not Found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({message:"Projects Found Failed"},{status:400})
  }
} 