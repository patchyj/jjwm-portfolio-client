/* eslint-disable import/prefer-default-export */
export function getProjectsQuery() {
  return {
    query: `
      query allProjects {
        allProjects {
          id
          title
          tagline
          twitterURL
          websiteURL
          facebookURL
          about
          images
          author {
            firstName
            lastName
          }
          tags
        }
      }`
  };
}

export function getProjectQuery(id) {
  return {
    query: `
      query getProject {
        project(id: "${id}") {
          id
          title
          tagline
          twitterURL
          websiteURL
          facebookURL
          about
          images
          author {
            firstName
            lastName
          }
        }
      }`
  };
}
