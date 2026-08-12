export function MoonIcon({ size, ...rest }: Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & { size: number }) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            {...rest}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 7V4M15 5.5h-3M10.5 1.5v2M11.5 2.5h-2M13.544 9.537a5.744 5.744 0 0 1-7.082-7.08 5.75 5.75 0 1 0 7.082 7.08Z"
            />
        </svg>
    )
}