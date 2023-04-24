import './globals.css'
import { Raleway, Roboto_Mono } from "next/font/google";

export const metadata = {
  title: 'MyWallet',
  description: 'Your digital wallet to track incomes and expenses',
}

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-purple-700 text-zinc-50 h-screen w-screen flex flex-col items-center justify-center`}>{children}</body>
    </html>
  )
}
