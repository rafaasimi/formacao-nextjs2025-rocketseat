interface AvatarTitleProps {
    children: React.ReactNode;
}

export function AvatarTitle({ children }: AvatarTitleProps) {
    return (
        <strong className="text-gray-200 text-body-sm">
            {children}
        </strong>
    )
}