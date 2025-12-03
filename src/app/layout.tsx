import type { Metadata } from "next";
import { Viewport } from "next";
import "./globals.css";
import { CartProvider } from "./components/CartProvider";
import { Header } from "./components/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DRIFT ENTERPRISES",
  description: "Amazon-style ecommerce experience for DRIFT ENTERPRISES, built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="amazon-main">{children}</main>
          <footer className="amazon-footer">
            <div className="amazon-footer-top">Back to top</div>
            <div className="amazon-footer-bottom">
              <p>DRIFT ENTERPRISES - Amazon style clone for demo purposes only.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
