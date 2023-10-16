import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../databse/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    //Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Coonection fail";
        });
        //check user
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No Error found with email please sign up...");
        }

        //compare() password
        const checkPass = await compare(credentials.password, result.password);

        //incorrect password
        if (!checkPass || result.email !== credentials.email) {
          return new Error("username or password does'nt match");
        }
        return result;
      },
    }),
  ],
  secret: "lsdfilsdfisefkclsdkclsifskdfklsfislfierklkclsiefnlfkewf",
});
