  /*
  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const relativeFilePath = createFilePath({ node, getNode, trailingSlash: false });
      const postDate = moment(node.frontmatter.date); // Use moment.js to easily change date format.
      const url = `${postDate.format("YYYY/MM/DD")}${node.frontmatter.slug}`;

      createNodeField({
        name: `slug`,
        node,
        value: url,
      });
    }
  }

  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
  */
