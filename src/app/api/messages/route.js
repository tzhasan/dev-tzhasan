import { connectDb } from "@/lib/connenctDb";
import { NextResponse } from "next/server";

export const POST = async (request, { params }) => {
  try {
    const db = await connectDb();
    const messageCollection = await db.collection("messages");
    const newMessage = await request.json(); // Get the data from request body

    // Insert the new message (assuming it has a Name and Marks in the body)
    const res = await messageCollection.insertOne(newMessage);

    return NextResponse.json(
      { message: "success", response: res },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting message:", error); // Log the exact error
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDb();
  const profileCollection = await db.collection("messages");
  try {
    const result = await profileCollection.find().toArray();

    if (result) {
      return NextResponse.json(
        { message: "Messages Found Successfully", result },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Messages Not Found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Messages Found Failed" },
      { status: 400 }
    );
  }
}; 


