import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "PescArt România - Recorduri de Pescuit",
  description: "Platformă pentru înregistrarea și urmărirea recordurilor de pescuit din România",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
