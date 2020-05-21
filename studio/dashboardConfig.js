export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ec6d6cafbfdbe766cc0ede6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page2-studio',
                  apiId: '54fe79f0-ebae-450b-b436-fa5f2a592ffa'
                },
                {
                  buildHookId: '5ec6d6ca4499f39c46724d6f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page2',
                  apiId: '0df0d4d5-4237-475d-b01b-4bcab33cac2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cillegio8/sanity-nextjs-landing-page2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
