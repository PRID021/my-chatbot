import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/ask/login",
    newUser: "/ask",
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user;
      let isOnChat = nextUrl.pathname.startsWith("/ask");
      let isOnRegister = nextUrl.pathname.startsWith("/ask/register");
      let isOnLogin = nextUrl.pathname.startsWith("/ask/login");

      if (isLoggedIn && (isOnLogin || isOnRegister)) {
        return Response.redirect(new URL("/ask", nextUrl));
      }

      if (isOnRegister || isOnLogin) {
        return true; // Always allow access to register and login pages
      }

      if (isOnChat) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      if (isLoggedIn) {
        return Response.redirect(new URL("/ask", nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
