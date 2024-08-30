// // import React from 'react';
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
// import type { NextComponentType } from "next"
// import type { NextPageContext } from "next"

// type RootLayoutProps = {
//   children: React.ReactNode // Ensure 'children' prop is present
//   Component: NextComponentType<NextPageContext, any, any> // Component type from Next.js
//   pageProps: any // or specific type for pageProps
// }

// const RootLayout: React.FC<RootLayoutProps> = ({ children, Component, pageProps }) => {
//   // Ensure Component is defined before rendering
//   if (!Component) {
//     return null // Or render an error message or fallback
//   }

//   return (
//     <div>
//       {/* Example layout */}
//       <Navbar />
//       <main>
//         {/* Render the main component (Component) with its props (pageProps) */}
//         <Component {...pageProps} />
//         {/* Render other children */}
//         {children}
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default RootLayout
