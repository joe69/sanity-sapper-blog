export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d1e3e596ea3da069cc20b79',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ketxoagf',
                  apiId: '670756c2-1541-4c28-85a0-859c5b02be36'
                },
                {
                  buildHookId: '5d1e3e59c88c689feadf375c',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-2vejeibh',
                  apiId: 'cdc436a4-d585-4ad6-88ca-6abc815d9c41'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joe69/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-2vejeibh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
