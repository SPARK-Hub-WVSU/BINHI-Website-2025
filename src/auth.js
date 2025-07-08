import NextAuth from "next-auth";
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        signIn({ profile }) {
            return profile.email.endsWith('@wvsu.edu.ph');
        }
    }
});