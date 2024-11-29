import "./globals.css"

import { GeistSans } from "geist/font/sans"

const title = "Next.js + Postgres Auth Starter"
const description =
  "This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data."

export const metadata = {
  title,
  description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>
        <main>{children}</main>
      </body>
    </html>
  )
}
