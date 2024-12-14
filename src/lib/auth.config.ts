import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
   
    /* TODO (if debugging doesn't help):
    async signIn({ user, account, profile, email, credentials }) 
      {
      if(user?.error === 'my custom error') {
         throw new Error('custom error to the client')
      }
      return true
   },
   */
  
    authorized({ auth, request: { nextUrl } }) {

      const isLoggedIn    = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/protected');

      if (isOnDashboard) {
        if (isLoggedIn) return true; // User is already on Protected page
        return false; // Redirect unauthenticated users to login page
      } 
      else if (isLoggedIn) {
        return Response.redirect(new URL('/protected', nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
