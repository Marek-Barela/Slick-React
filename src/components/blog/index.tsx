import React from "react";
import SectionWrapper from "../section-wrapper";
import WrapperCenterColumn from "../wrapper-center-column";
import SectionHeader from "../section-header";
import Paragraph from "../paragraph";
import BlogContainer from "../blog-container";

const Blog = () => {
  return (
    <section id="Blog">
      <SectionWrapper>
        <WrapperCenterColumn>
          <SectionHeader headerText="Latest Blog Posts" />
          <Paragraph paragraphText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
        </WrapperCenterColumn>
        <BlogContainer />
      </SectionWrapper>
    </section>
  );
};

export default Blog;
