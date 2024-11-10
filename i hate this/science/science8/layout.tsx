import type {Metadata} from "next";
import "@/styles/globals.css";
import "@/styles/nav.css";
import React from "react";

export const metadata: Metadata = {
    title: "Trinity Academics | Science Grade 8",
    description: "Trinity Academics Science Grade 8 page.",
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