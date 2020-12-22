import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            category
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 140, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    category: post.frontmatter.category,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
