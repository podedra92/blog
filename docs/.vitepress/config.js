export default {
  title: 'Useful',
  titleTemplate: 'Dev Blog',
  description: 'Prakashs Dev Blog',
  lang: 'en-UK',
  base: '/blog/',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    logo: '/ninja-laptop.png',
    socialLinks: [
      { icon: 'linkedin', link: 'https://uk.linkedin.com/in/prakash-odedra-892183183' },
      { icon: 'github', link: 'https://github.com/podedra92' }
    ],
    nav: [
      { text: 'Courses', link: '/courses/' },
      { text: 'Learnings', link: '/learning/' },
      { text: 'About Me', link: '/about/' },
    ],
    footer: {
      copyright: '© 2022 Prakash Odedra'
    },
    editLink: {
      pattern: 'https://github.com/podedra92/blog',
      text: 'Edit this page on GitHub'
    },
    sidebar: {
      '/learning/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Recent Posts', link: '/learning/' },
          ]
        },
        {
          text: 'Documentation',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'How this blog was made', link: '/learning/docs/this-blog' },
            { text: 'Tips on Technical Writing', link: '/learning/docs/tech-writing' },
          ]
        }
      ],
      '/courses/': [
        {
          text: 'Config',
          items: [
            { text: 'courses', link: '/courses/' },
          ]
        }
      ]
    }
  }
}