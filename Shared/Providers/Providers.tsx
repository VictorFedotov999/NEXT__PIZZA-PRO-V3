'use client';

import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';
import { SessionProvider } from 'next-auth/react';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>

            <Toaster />
            <NextTopLoader color='orange' height={5} />
        </>
    );
};
