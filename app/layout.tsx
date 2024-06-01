import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: "YajushMishra",
  authors: {
    name: "yajushmishra",
  },

  description:
    "I am a fullstack developer working with the latest technology to build industry grade products.",
  openGraph: {
    title: "Yajush Mishra",
    description:
      "I am a fullstack developer working with the latest technology to build industry grade products.",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "Yajush Mishra",
    images: "/project_1.jpg",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
