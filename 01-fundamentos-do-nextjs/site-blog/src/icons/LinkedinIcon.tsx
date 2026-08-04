import * as React from "react"

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
                d="M2.667 2a.667.667 0 100 1.333.667.667 0 000-1.333zm-2 .667a2 2 0 114 0 2 2 0 01-4 0zm10 3.333a3.333 3.333 0 00-3.334 3.333v4h1.333v-4a2 2 0 014 0v4H14v-4A3.333 3.333 0 0010.666 6zm-3.3.033a4.667 4.667 0 017.966 3.3V14a.667.667 0 01-.667.667H12a.667.667 0 01-.667-.667V9.333a.667.667 0 00-1.333 0V14a.667.667 0 01-.667.667H6.666A.667.667 0 016 14V9.333c0-1.237.492-2.424 1.367-3.3zM.667 6c0-.368.298-.667.666-.667H4c.368 0 .667.299.667.667v8a.667.667 0 01-.667.667H1.333A.667.667 0 01.667 14V6zM2 6.667v6.666h1.333V6.667H2z"
                fill="currentColor"
            />
        </svg>
    )
}

export default LinkedinIcon
