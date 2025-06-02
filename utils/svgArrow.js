export default function svgArrow() {
  return `
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(17, 17)">
        <path d="M0 66L66 0" stroke="currentColor" stroke-width="0.5rem" />
        <path d="M12 0H66V54" stroke="currentColor" stroke-width="0.5rem" />
      </g>
    </svg>
  `
}