import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" title="Página Inicial">
      <Image src="/logo.svg" alt="" width={104} height={24} />
    </Link>
  );
}
