import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../../../prisma/prisma-client';
import { UserRole } from '@prisma/client';

export const authOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
            profile(profile, tokens) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    role: 'USER' as UserRole,
                };
            },
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },

            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const findUser = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                if (!findUser) {
                    return null;
                }

                if (credentials.password !== findUser.password) {
                    return null;
                }

                return {
                    id: String(findUser.id),
                    name: findUser.name,
                    email: findUser.email,
                    role: findUser.role,
                };
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                console.log('SignIn attempt:', { user, account, profile });

                if (account?.provider === 'credentials') {
                    return true;
                }

                if (account?.provider === 'github') {
                    if (!user.email) {
                        console.error('GitHub user has no email');
                        return false;
                    }

                    let existingUser = await prisma.user.findFirst({
                        where: {
                            OR: [{ providerId: account.providerAccountId }, { email: user.email }],
                        },
                    });

                    if (existingUser) {
                        await prisma.user.update({
                            where: { id: existingUser.id },
                            data: {
                                name: user.name,
                                provider: account.provider,
                                providerId: account.providerAccountId,
                                email: user.email,
                            },
                        });
                        console.log('User updated:', existingUser.id);
                    } else {
                        existingUser = await prisma.user.create({
                            data: {
                                email: user.email,
                                name: user.name,
                                password: account.providerAccountId,
                                provider: account.provider,
                                providerId: account.providerAccountId,
                                role: 'USER',

                                UserBasket: {
                                    create: {},
                                },
                            },
                        });
                        console.log('New user created:', existingUser.id);
                    }

                    return true;
                }

                return true;
            } catch (error) {
                console.error('SignIn error:', error);
                return false;
            }
        },

        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.name = user.name;
                token.email = user.email;
                token.provider = account?.provider;
            }

            if (token.email) {
                try {
                    const findUser = await prisma.user.findFirst({
                        where: {
                            email: token.email,
                        },
                    });

                    if (findUser) {
                        token.id = String(findUser.id);
                        token.name = findUser.name;
                        token.email = findUser.email;
                        token.role = findUser.role;
                    }
                } catch (error) {
                    console.error('JWT callback error:', error);
                }
            }

            return token;
        },

        session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
