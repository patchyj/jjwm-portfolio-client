import React from 'react';
import uuidv2 from 'uuid/v1';
import BlogCard from './BlogCard';

const BlogList = (props) => {
  const { posts } = props;
  const allBlogs = posts.map(post => <BlogCard post={post} key={uuidv2()} />);
  return (
    <div className="container">
      {allBlogs}
    </div>
  );
};

export default BlogList;
