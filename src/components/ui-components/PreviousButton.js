import styles from "components/ui-components/PreviousButton.module.css";

const PreviousButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={styles["previous-button"]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_416_918)">
          <path
            d="M7.828 11.0002L13.192 5.63617L11.778 4.22217L4 12.0002L11.778 19.7782L13.192 18.3642L7.828 13.0002H20V11.0002H7.828Z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_416_918">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(-1 0 0 1 24 0)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default PreviousButton;
