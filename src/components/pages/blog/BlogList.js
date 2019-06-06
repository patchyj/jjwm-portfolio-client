import React from 'react';
import uuidv2 from 'uuid/v1';
import BlogCard from './BlogCard';

const BlogList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { posts } = props;
  // eslint-disable-next-line no-console
  const allBlogs = posts && posts.map(post => <BlogCard post={post} key={uuidv2()} />);
  return (
    <div className="container">
      <div className="row">
      {allBlogs}
      </div>
    </div>
  );
};

export default BlogList;
