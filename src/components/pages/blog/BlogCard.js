import React from 'react';

const imageStyle = image => ({
  background: `url(${image})`,
  height: '15rem',
  width: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
});

const BlogCard = ({ post }) => (
  <div className="row mt-5">
    <div className="card col-md-8 offset-md-2 p-5">
      <div style={imageStyle(post.images[0])} />
      <h5 className="p-0">{post.title}</h5>
      <h6 className="text-muted">{post.tagline}</h6>
      <p>{post.author.firstName} {post.author.lastName}</p>
    </div>
  </div>
);

export default BlogCard;
