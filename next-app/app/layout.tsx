"use client";

import { SetStateAction, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import "./globals.css"; // Import your global CSS file if you have one
import { CartProvider } from "../pages/api/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showToast = (msg: SetStateAction<string>) => {
      setMessage(msg); // Show the message
    };

    // Disable right-click
    const disableRightClick = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      showToast("Right-click is disabled!");
    };
    document.addEventListener("contextmenu", disableRightClick);

    // Disable F12, Ctrl+Shift+I, and other shortcuts
    const disableShortcuts = (e: { keyCode: number; ctrlKey: any; shiftKey: any; preventDefault: () => void }) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 75) || // Ctrl+Shift+K (Firefox)
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
        showToast("Inspect Element and View Source are disabled!");
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <CartProvider>
        <Navbar />
        <Toast message={message} />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
