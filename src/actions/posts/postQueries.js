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
          tags
          createdAt
          author {
            id
            firstName
            lastName
          }
        }
      }`
  };
}
