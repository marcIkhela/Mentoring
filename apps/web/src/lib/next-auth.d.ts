import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
      name: string;
      role:string;
      avatar:string;
    };
    backendToken: {
      accessToken: string;
      refreshToken: string;
      expiresIn:number;
    };
  }
}

import { JWT } from "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      email: string;
      name: string;
      role:string;
      avatar:string;
    };
    backendToken: {
      accessToken: string;
      refreshToken: string;
      expiresIn:number;
    };
  }
}

declare global{
  namespace NodeJS{
      interface ProcessEnv{
          NEXTAUTH_SECRET:string;
          NEXt_API:string;
          NEXT_WEB:string;
      }
  }
}
