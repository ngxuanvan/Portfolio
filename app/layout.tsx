import "./globals.css"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import Script from "next/script"
import SmoothScroll from "@/components/SmoothScroll"

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
  verification: {
    google: "YvU460JqT7aqsXC9Gwl8DbGE69Pq3Vc4WIEN81zPKuY",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3Z19CK8LHZ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3Z19CK8LHZ');
        `}
      </Script>
      <body suppressHydrationWarning className="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
