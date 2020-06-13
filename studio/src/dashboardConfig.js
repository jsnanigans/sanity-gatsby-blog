export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee4a1c7b2863f741db7442b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qu8nk9v4',
                  apiId: '15c908a8-81f3-4a87-9ef9-539c36bd1ced'
                },
                {
                  buildHookId: '5ee4a1c7bc45a5573f809bf4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cy9fqqqp',
                  apiId: 'f4c7378e-7192-42d0-a7f9-849c00444bc8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jsnanigans/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cy9fqqqp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
