import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Header() {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";
  const isBlogPage = pathname.startsWith("/blog");

  return (
    <header className="fixed top-0 z-50 w-full border-bottom border-b-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      <div className=" max-w-7xl mx-auto  sm:px-6 px-4  lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="gap-6 items-center flex">
            <Link
              href="/"
              className={cn(
                "font-medium text-sm transition-colors  hover:text-blue-500",
                isHomePage ? "text-blue-500" : "text-muted-foreground",
              )}
            >
              Início
            </Link>
            <Link
              href="/blog"
              className={cn(
                "font-medium text-sm transition-colors hover:text-blue-500",
                isBlogPage ? "text-blue-500" : "text-muted-foreground",
              )}
            >
              Blog
            </Link>
            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
