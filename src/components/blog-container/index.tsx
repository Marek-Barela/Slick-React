import React from "react";
import BlogPost from "../blog-post";
import styles from "./index.module.css";
import blogImgOne from "../../images/blog1.jpg";
import blogImgTwo from "../../images/blog2.jpg";
import blogImgThree from "../../images/blog3.jpg";

const BlogContainer = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      <BlogPost image={blogImgOne} />
      <BlogPost image={blogImgTwo} />
      <BlogPost image={blogImgThree} />
    </div>
  );
};

export default BlogContainer;
