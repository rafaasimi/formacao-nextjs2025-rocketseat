import * as React from "react"

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.172 1.838A4 4 0 0110 .667h2c.368 0 .667.298.667.666V4a.667.667 0 01-.667.667h-2V6h2a.667.667 0 01.647.828l-.667 2.667a.667.667 0 01-.647.505H10v4.667a.667.667 0 01-.667.666H6.667A.667.667 0 016 14.667V10H4.667A.667.667 0 014 9.333V6.667C4 6.298 4.298 6 4.667 6H6V4.667a4 4 0 011.172-2.829zM10 2a2.667 2.667 0 00-2.667 2.667v2a.667.667 0 01-.666.666H5.333v1.334h1.334c.368 0 .666.298.666.666V14h1.334V9.333c0-.368.298-.666.666-.666h1.48l.333-1.334H9.333a.667.667 0 01-.666-.666v-2A1.333 1.333 0 0110 3.333h1.333V2H10z"
                fill="currentColor"
            />
        </svg>
    )
}

export default FacebookIcon
