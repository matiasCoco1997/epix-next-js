import type { Metadata } from "next";
import "./globals.css";
import Nav from "./shared/nav";
import Footer from "./shared/footer";
import Whatsapp from "./shared/whatsapp";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Epix",
  description: "Empresa de protección contra incendios",
  icons: {
    icon: "/icons/sprinkler.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col bg-gray-100`}>
        <header>
          <Nav />
        </header>

        <main className="h-full flex-grow content-center">{children}</main>
        <Toaster position="top-right" expand={false} richColors closeButton />
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
