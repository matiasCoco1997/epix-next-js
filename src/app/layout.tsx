import type { Metadata } from "next";
import "./globals.css";
import Nav from "./shared/nav";
import Footer from "./shared/footer";

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
      <body className={`antialiased min-h-screen flex flex-col bg-epix-100`}>
        <header>
          <Nav />
        </header>

        <main className="h-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
