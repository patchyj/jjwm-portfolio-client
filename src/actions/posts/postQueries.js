/* eslint-disable import/prefer-default-export */
export function getPostsQuery() {
  return {
    query: `
      query allBlogs {
        allBlogs {
          id
          title
          tagline
          images
          author {
            id
            firstName
            lastName
          }
        }
      }`
  };
}
