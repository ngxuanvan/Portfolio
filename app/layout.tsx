import "./globals.css"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import SmoothScroll from "@/components/SmoothScroll"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nguyen Xuan Van | Full Stack Developer &Backend Systems Engineer",
  description:
    "Designing real world systems and building scalable backend services. Experienced in Node.js, Python, and Blockchain. Passionate about open source and cloud technologies.",
  metadataBase: new URL("https://nxvan.com"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}>
      <body suppressHydrationWarning className="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <SmoothScroll>{children}</SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  )
}
