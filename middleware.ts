import NextAuth from "next-auth";

import { authConfig } from "@/app/ask/(auth)/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/ask", "/ask/:id", "/ask/api/:path*", "/ask/login", "/ask/register"],
};
