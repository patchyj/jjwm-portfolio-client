import React from 'react';
import uuidv2 from 'uuid/v1';
import Grid from '@material-ui/core/Grid';
import BlogCard from './BlogCard';

const BlogList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { posts } = props;
  // eslint-disable-next-line no-console
  const allBlogs = posts && posts.map(post => <BlogCard post={post} key={uuidv2()} />);

  return (
    <Grid container spacing={0}>
      {allBlogs}
    </Grid>
  );
};

export default BlogList;
