import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl font-bold text-green-600">
      Home
      <Link href={"/blog"} prefetch>Acessar blog</Link>
    </div>
  );
}
