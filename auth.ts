import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

const fakeCredentials = {
  name: "John Doe",
  email: "superadmin@ayshei.com",
  password: "superadmin123",
};

class UserNotFoundError extends CredentialsSignin {
  code = "not_found";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user: any = null;

        // getUser query

        // logic to verify if the user exists
        if (
          credentials.email === fakeCredentials.email &&
          credentials.password === fakeCredentials.password
        ) {
          user = {
            id: 1,
            name: fakeCredentials.name,
            email: fakeCredentials.email,
          };
        }

        if (!user) {
          throw new UserNotFoundError("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user.token = token.token;
      session.user.id = token.id;

      return session;
    },
  },
});
