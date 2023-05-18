import styles from "components/ui-components/NextButton.module.css";

const NextButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={styles["next-button"]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_416_922)">
          <path
            d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_416_922">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default NextButton;
