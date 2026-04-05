import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoWattAI | Precision Energy Engine",
  description: "AI-Driven Smart Energy Coach and Simulation Platform",
};

import { AppLayout } from "@/components/layout/AppLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
