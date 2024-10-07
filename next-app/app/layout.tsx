"use client"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./globals.css" // Import your global CSS file if you have one

// export const metadata = {
//   title: 'Ceramic Store',
//   description: 'احدث منتجات وعروض شركة سيراميكا مايوركا',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>{/* <title>{metadata.title}</title> */}</head>
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
