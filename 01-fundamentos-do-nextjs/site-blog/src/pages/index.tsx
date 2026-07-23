import { Button } from "@/components/ui/button";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <h1>Hello World</h1>
      <Button>Teste</Button>
      <Button variant={"destructive"}>Teste</Button>
      <Button variant={"ghost"}>Teste</Button>
      <Button variant={"link"}>Teste</Button>
      <Button variant={"secondary"}>Teste</Button>
    </div>
  );
}
