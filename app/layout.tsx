import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stillworks Test App",
  description: "A test app to validate Stillworks route detection and testing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
