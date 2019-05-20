import React, { FC } from "react";
import SubsectionHeader from "../subsection-header";
import styles from "./index.module.css";
import Paragraph from "../paragraph";
import PostDate from "../blog-post-date";

interface Props {
  image: string;
}

const BlogPost: FC<Props> = props => {
  const { wrapper, postWrapper, imageWrapper, textWrapper } = styles;
  const { image } = props;
  return (
    <div className={wrapper}>
      <div className={postWrapper}>
        <div className={imageWrapper}>
          <img src={image} alt="blog post" />
        </div>
        <div className={textWrapper}>
          <SubsectionHeader headerText="How Slick Will Transform Your Business" />
          <Paragraph paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry." />
          <strong>5 min read</strong>
        </div>
        <PostDate />
      </div>
    </div>
  );
};

export default BlogPost;
