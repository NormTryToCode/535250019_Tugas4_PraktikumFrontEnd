import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PawPals | Pet Grooming & Care",
  description: "Friendly grooming, day care and wellness services for your pets.",
};

// The layout wraps EVERY page: navbar on top, footer at the bottom,
// and the current page is rendered in the middle as `children`.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
