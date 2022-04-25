export default function GraphIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7L11.9558 11.5662C11.5299 12.2051 10.5728 12.1455 10.2294 11.4587L9.77063 10.5413C9.42725 9.8545 8.47006 9.79491 8.04415 10.4338L5 15"
        stroke={props.strokeColor2}
        stroke-width={props.strokeWidth2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="2"
        stroke={props.strokeColor2}
        stroke-width={props.strokeWidth2}
      />
    </svg>
  );
}
