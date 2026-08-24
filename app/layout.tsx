import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAY Portal Demo",
  description: "Кабинет студента",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}