export function SunIcon({ size, ...rest }: Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & { size: number }) {

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
      d="M8 11.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM8 2.25V1M3.931 3.931l-.88-.881M2.25 8H1M3.931 12.069l-.88.881M8 13.75V15M12.069 12.069l.88.881M13.75 8H15M12.069 3.931l.88-.881"
    />
  </svg>
    )
}