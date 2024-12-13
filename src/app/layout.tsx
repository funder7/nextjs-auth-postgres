import { Provider } from "@/components/ui/provider"
import { Geist} from "next/font/google"

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
