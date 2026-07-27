import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" title="Página inicial">
            <div className="hidden md:block">
                <Image src="/brand-logo.svg" alt="Site.Set" width={116} height={32} />
            </div>

            <div className="md:hidden">
                <Image src="/brand-icon.svg" alt="Site.Set" width={40} height={40} />
            </div>
        </Link>
    )
}