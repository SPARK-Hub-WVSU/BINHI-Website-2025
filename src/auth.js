import NextAuth from "next-auth";
import Google from 'next-auth/providers/google';
import { AUTHORIZED_CMS_USERS, isAuthorizedEmail } from '@/config/cms-authorization';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        signIn({ profile }) {
            // Allow sign-in for all WVSU emails, but we'll check authorization later
            return profile.email.endsWith('@wvsu.edu.ph');
        },
        session({ session, token }) {
            // Add CMS access permission to session based on authorization list
            if (session?.user?.email) {
                session.user.hasCMSAccess = isAuthorizedEmail(session.user.email);
            }
            return session;
        },
        jwt({ token, profile }) {
            return token;
        }
    }
    // Remove the custom pages configuration to avoid redirect loops
});