import React from 'react';
import uuidv2 from 'uuid/v1';
import BlogCard from './BlogCard';

const BlogList = (props) => {
  const { posts } = props;
  console.log(posts);
  const allBlogs = posts && posts.map(post => <BlogCard post={post} key={uuidv2()} />);
  return (
    <div className="container">
      {allBlogs}
    </div>
  );
};

export default BlogList;
