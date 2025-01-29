import { Geist} from "next/font/google"
import { auth } from 'auth'
import { Providers } from "./providers/Providers"

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

const title       = "Next.js + Postgres Auth Starter"
const description =
  "This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data."

export const metadata = {
  title,
  description,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <Providers session={session}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
