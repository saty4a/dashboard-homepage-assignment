"use client";
import Header from "@/components/header";
import HomePage from "@/pages/homePage";
import Image from "next/image";

export default function Home() {
  const isBrowser = () => typeof window !== "undefined";
  if (isBrowser()) {
    return (
      <main className="flex flex-col lg:flex-row min-h-screen manrope">
        <Header />
        <HomePage />
      </main>
    );
  }
}
