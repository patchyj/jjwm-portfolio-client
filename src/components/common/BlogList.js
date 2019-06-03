import React from 'react';

const BlogList = (props) => {
  const { posts } = props;
  const allBlogs = posts.map(post => (
    <div className="row mt-5">
      <div className="card col-md-6 offset-md-3 p-5">
        <h1 className="p-0">{post.title}</h1>
        <h5 className="text-muted">{post.tagline}</h5>
      </div>
    </div>
  ));
  return (
    <div className="container">
      {allBlogs}
    </div>
  );
};

export default BlogList;
