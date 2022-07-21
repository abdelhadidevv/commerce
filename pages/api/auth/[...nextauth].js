import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import authService from "../../../store/features/auth/authService";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const res = await authService.login({ email, password });
          const user = await res.data;
          // If no error and we have user data, return it
          if (res.status === 200 && user) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          throw new Error(message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
});
