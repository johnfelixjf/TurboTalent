import { useParams } from "react-router-dom";

import HomeLayout from "layouts/HomeLayout";
import Resume from "components/page-components/blog-detail/resume";
import Interviewer from "components/page-components/blog-detail/Interviewer";
import CollegeGraduate from "components/page-components/blog-detail/collegeGraduate";
import JobMarket from "components/page-components/blog-detail/jobMarket";
import StartupBlog from "components/page-components/blog-detail/startupBlog";

const BlogDetail = () => {
  let { id } = useParams();
  let blogComponent;

  switch (id) {
    case "1":
      blogComponent = <Resume/>;
      break;
    case "2":
      blogComponent = <Interviewer/>;
      break;
    case "3":
      blogComponent = <CollegeGraduate/>;
      break;
    case "4":
      blogComponent = <JobMarket/>;
      break;
    case "5":
      blogComponent = <StartupBlog/>;
      break;

    default:
      blogComponent = <></>;
  }

  return <HomeLayout>{blogComponent}</HomeLayout>;
};

export default BlogDetail;
