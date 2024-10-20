import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDb } from "@/lib/connenctDb";
import NextAuth from "next-auth/next";
const handler = NextAuth({
  session: {
    secret: process.env.AUTH_SECRET,
    strategy: "jwt",
    maxAge: 2592000,
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDb();
        const userCollection = db.collection("users");

        const currentUser = await userCollection.findOne({ email });
        if (!currentUser) {
          return null;
        }

        // const passwordMatching = await bcrypt.compareSync(
        //   password,
        //   currentUser.password
        // );
        if (currentUser.password !== password) {
          return null;
        }
        // if (!passwordMatching) {
        //   return null;
        // }
        return currentUser;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/admin/signin",
  },
});
export { handler as GET, handler as POST };