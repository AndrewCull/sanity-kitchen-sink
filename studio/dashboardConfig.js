export default {
  widgets: [
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
                  buildHookId: '5f7f03f7b4e413738e06f925',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r1g59yhi',
                  apiId: '15c3d606-af6a-4ff4-98ca-89cde0c441a3'
                },
                {
                  buildHookId: '5f7f03f76d7fa28087840aa3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9rrznytw',
                  apiId: '3f7ed357-cb79-474b-ab3f-0db3b53c2a85'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndrewCull/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9rrznytw.netlify.app', category: 'apps'}
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
