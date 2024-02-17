import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/nav.css";
import "@/styles/homeButtons.css";
import React from "react";

export const metadata: Metadata = {
  title: "Trinity Academics",
  description: "Trinity Academics is a website that provides free educational resources for students."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
