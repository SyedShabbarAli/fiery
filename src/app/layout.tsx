import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fiery - Dangerously Addictive | Best Fried Chicken in Lahore",
  description:
    "Fiery - Dangerously Addictive fried chicken in Lahore. Order online for delivery, pickup or dine-in. Burgers, wings, tenders, wraps and more.",
  openGraph: {
    title: "Fiery - Dangerously Addictive",
    description: "Best fried chicken in Lahore. Order online now!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebas.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-poppins)] antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
