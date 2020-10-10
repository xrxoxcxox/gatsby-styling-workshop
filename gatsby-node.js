const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const lpTemplate1 = path.resolve(`src/templates/lp1.js`)
  const lpTemplate2 = path.resolve(`src/templates/lp2.js`)
  const result = await graphql(`
    query loadPagesQuery {
      allLps {
        nodes {
          parent {
            ... on File {
              name
            }
          }
          properties {
            name
            type
            address
            image
          }
          id
        }
      }
    }
  `)
  const pages = result.data.allLps.nodes
  const pageByTemplate = (page, template, name) => {
    createPage({
      path: `${page.parent.name}-${name}`,
      component: template,
      context: {
        id: page.id
      },
    })
  }
  pages.forEach((page) => {
    pageByTemplate(page, lpTemplate1, 'type1')
    pageByTemplate(page, lpTemplate2, 'type2')
  })
}