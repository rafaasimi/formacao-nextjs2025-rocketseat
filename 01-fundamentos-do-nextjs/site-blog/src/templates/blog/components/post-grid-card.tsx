import { cn } from "@/lib/utils";

interface PostGridCardProps {
    children: React.ReactNode;
}

export function PostGridCard({ children, className, ...rest }: PostGridCardProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 ', className)} {...rest}>
            {children}
        </div>
    )
}