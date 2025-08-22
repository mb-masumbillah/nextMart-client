import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Mart",
  description: "NextMart e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={` ${roboto.className} antialiased`}
          cz-shortcut-listen="true"
        >
          <Toaster richColors position="top-center" />
          {children}
        </body>
      </html>
    </Providers>
  );
}
