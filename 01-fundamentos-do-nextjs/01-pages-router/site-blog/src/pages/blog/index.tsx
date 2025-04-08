import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <Image src="/coffee.jpg" alt="" width={600} height={600} />

      <Link href={"/"}>Voltar para home</Link>
    </div>
  );
}
