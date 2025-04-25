import { SVGProps } from "react";

export const PieChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 3v9h9"></path>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
      </g>
    </svg>
  );
};
