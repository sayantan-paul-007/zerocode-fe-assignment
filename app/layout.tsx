import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth"
import { UserProvider } from "@/context/userContext"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ChatterBot – Your Intelligent Chat Companion",
  description: "A sleek, production-ready chatbot web app built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI and powered by Gemini LLM APIs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value
  let username = ""

  if (token) {
    try {
      username = verifyToken(token).username
    } catch {}
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}  antialiased`}
      >
       <ThemeProvider attribute="class">
        <UserProvider initialUsername={username}>
          {children}        
         <Toaster position="top-center" />
         </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
