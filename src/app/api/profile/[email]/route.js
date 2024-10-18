import { connectDb } from "@/lib/connenctDb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
  const db = await connectDb()
  const profileCollection = await db.collection('profiles')
  try {
   const result = await profileCollection.findOne({ email: params?.email });

     if (result) {
      return NextResponse.json(
        { message: "Profile Found Successfully", result },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Profile Not Found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({message:"Profile Found Failed"},{status:400})
  }
} 

export const PATCH = async (request, { params }) => {
  try {
    const db = await connectDb();
    const profileCollection = db.collection('profiles');

    const updateDoc = await request.json();  // Get the update data from the request body

    // Ensure the profile id is in the correct format
    const profileid = params?.email;

    // Update the profile using updateOne, since you're updating a single document
    const res = await profileCollection.updateOne(
      { email: params?.email }, // Match by _id
      {
        $set: { ...updateDoc }, // Set the new fields
      }
    );

    if (res.matchedCount === 0) {
      return NextResponse.json({ message: "No matching profile found" }, { status: 404 });
    }

    if (res.modifiedCount === 0) {
      return NextResponse.json({ message: "No changes made" }, { status: 200 });
    }

    return NextResponse.json({ message: "Profile updated successfully", response: res }, { status: 200 });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ message: "Something went wrong", error }, { status: 500 });
  }
};