import { MongoClient, ServerApiVersion } from "mongodb";

let db
export const connectDb =async () => {
  if (db) return db
  try {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.USER_KEY}@cluster0.ex2dsg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("dev-tzhasan");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return db
  } catch (error) {
    console.log("🚀 ~ connectDb ~ error:", error)
    
  }
}