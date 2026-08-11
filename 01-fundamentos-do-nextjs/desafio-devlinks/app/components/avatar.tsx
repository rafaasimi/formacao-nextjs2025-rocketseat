import Image from "next/image";

type AvatarProps = {
    src: string;
    alt: string;
} & React.ComponentProps<typeof Image>;

export function Avatar({ src, alt, ...props }: AvatarProps) {
    return (
        <div className="rounded-full w-28 h-28 relative overflow-hidden">
            <Image src={src} alt={alt} {...props} />
            <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-stroke/50 pointer-events-none" />
        </div>
    );
}