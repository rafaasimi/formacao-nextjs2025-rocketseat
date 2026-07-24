import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ActiveLink } from "./active-link";
import Image from "next/image";
import { Logo } from "./logo";

export function Header() {

  return (
    <header className="fixed top-0 z-50 w-full border-bottom border-b-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className=" max-w-7xl mx-auto  sm:px-6 px-4  lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="gap-6 items-center flex">
            <ActiveLink href="/">Inicio</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Link className={buttonVariants({ variant: "secondary" })} href="/comecar">
              Começar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
