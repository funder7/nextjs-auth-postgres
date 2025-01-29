"use client"

import { SessionProvider } from "next-auth/react"
import { Provider } from "@/components/ui/provider"
import { Session } from "next-auth"


export function Providers({ children, session }: { children: any, session: Session|null }) {
    return (
        <SessionProvider session= { session } >
            <Provider>
                {children}
            </Provider>            
        </SessionProvider>
    );
}