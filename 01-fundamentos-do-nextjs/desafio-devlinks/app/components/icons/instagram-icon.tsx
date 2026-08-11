export function InstagramIcon({ size, ...rest }: Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & { size: number }) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            {...rest}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19.465 4.535a4.388 4.388 0 0 0-3.09-1.285h-8.75A4.388 4.388 0 0 0 3.25 7.625v8.75a4.388 4.388 0 0 0 4.375 4.375h8.75a4.388 4.388 0 0 0 4.375-4.375v-8.75a4.389 4.389 0 0 0-1.285-3.09ZM7.625 1.5h8.75c3.369 0 6.125 2.756 6.125 6.125v8.75c0 3.369-2.756 6.125-6.125 6.125h-8.75c-3.369 0-6.125-2.756-6.125-6.125v-8.75C1.5 4.256 4.256 1.5 7.625 1.5Zm9.333 5.904a1.312 1.312 0 1 0 1.458-2.182 1.312 1.312 0 0 0-1.458 2.182ZM13.945 9.09a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82ZM9.083 7.635a5.25 5.25 0 1 1 5.834 8.73 5.25 5.25 0 0 1-5.834-8.73Z"
                clipRule="evenodd"
            />
        </svg>
    )
}