import React from "react";

export default function Link(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 14H5C2.79086 14 1 12.2091 1 10V10C1 7.79086 2.79086 6 5 6H8"
        stroke={props.linkcolor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 10H6"
        stroke={props.linkcolor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14H15C17.2091 14 19 12.2091 19 10V10C19 7.79086 17.2091 6 15 6H12"
        stroke={props.linkcolor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
