import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

// We add a little extra rule (config) saying that the authentication should apply to most paths, but not to paths that include "api," "_next/static," "_next/image," or have a file extension of ".png."
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
