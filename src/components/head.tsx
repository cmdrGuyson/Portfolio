import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <main className="w-full dark:bg-gray-800">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
