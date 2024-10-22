import CredentialProvider from "next-auth/providers/credentials";
import { connectDb } from "@/lib/connenctDb";
import NextAuth from "next-auth/next";
const handler = NextAuth({
  session: {
    secret: process.env.AUTH_SECRET,
    strategy: "jwt",
    maxAge: 3600,
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id; // Save user ID to token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id; // Assign token ID to session
      return session;
    },
  },
  pages: {
    signIn: "/admin/signin",
  },
});
export { handler as GET, handler as POST };