import { authConfig } from "@/lib/auth.config";
import { getUser } from "@/services/user";
import { compare } from "bcrypt-ts";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
      
          const username = credentials.username as string;
          const password = credentials.password as string;

          if ( username === null || password === null ) {
            throw new Error("Credentials must be provided");
          }

          // logic to verify if the user exists
          const user = await getUser(username);

          const isValidUser = user && await compare(password, user.password)
              
          if (!isValidUser) {
            // No user found // bad password
            throw new Error("Invalid credentials.");
          }

          // Successful login
          // return user object with profile data
          return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
});
