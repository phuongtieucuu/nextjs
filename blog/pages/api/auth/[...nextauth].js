import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findByEmail } from "../../../dummy-data";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) throw new Error("Invalid Input!!");
        const user = findByEmail(email);
        if (!user) throw new Error("User not found!!");
        return { email };
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, user, token }) {
      // console.log({ session, user });
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log({ user });
      return token;
    },
  },
};

export default NextAuth(authOptions);
