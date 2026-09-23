import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Providers from "@/components/Providers";
import { restaurantInfo } from "@/data/restaurantInfo";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ladybake.example.com"),
  title: {
    default: `${restaurantInfo.name} — Pizza, Burgers, Cakes & More`,
    template: `%s — ${restaurantInfo.name}`,
  },
  description:
    "LadyBake is a modern restaurant and bakery serving pizza, burgers, pasta, cakes, and more — order online for delivery or pickup, or book a table.",
  openGraph: {
    title: `${restaurantInfo.name} — Pizza, Burgers, Cakes & More`,
    description:
      "Fresh pizza, burgers, pasta, custom cakes, and more. Order for delivery or pickup, or book a table at LadyBake.",
    siteName: restaurantInfo.name,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">
        <Providers>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
