import React from 'react';

const BlogCard = ({ post }) => (
  <div className="row mt-5">
    <div className="card col-md-6 offset-md-3 p-5">
      <h1 className="p-0">{post.title}</h1>
      <h5 className="text-muted">{post.tagline}</h5>
    </div>
  </div>
);

export default BlogCard;
