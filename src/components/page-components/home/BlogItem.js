import { useNavigate } from "react-router-dom";

import styles from "components/page-components/home/BlogItem.module.css";

const BlogItem = (props) => {
  const navigate = useNavigate();

  const blogNavigationHandler = () => {
    navigate(`/blog-detail/${props.id}`);
  };

  return (
    <div className={styles["blog-item__container"]}>
      <div>
        <img
          src={props.image}
          alt={props.title}
          className={styles["blog-item__image"]}
        />
      </div>

      <div className={styles["blog-item__text-wrapper"]}>
        <div className={styles["blog-item__category"]}>{props.category}</div>
        <h5 className={styles["blog-item__title"]}>{props.title}</h5>
        <li className={styles["blog-item__date"]}>{props.date}</li>

        <button
          onClick={blogNavigationHandler}
          className={styles["blog-item__read-more"]}
        >
          <p>Read More</p>{" "}
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
      </div>
    </div>
  );
};

export default BlogItem;
