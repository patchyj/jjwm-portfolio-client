import React from 'react';

const imageStyle = image => ({
  background: `url(${image})`,
  height: '10rem',
  width: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  marginBottom: '20px'
});

// eslint-disable-next-line react/prop-types
const BlogCard = ({ post }) => (
  <div className="card col-md-4 offset-md-1 col-sm-8 offset-sm-2  p-5 my-2">
    <div style={imageStyle(post.images[0])} />
    <h5 className="p-0">{post.title}</h5>
    <h6 className="text-muted">{post.tagline}</h6>
    <p>{post.author.firstName} {post.author.lastName}</p>
  </div>
);

export default BlogCard;
