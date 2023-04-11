import { SearchPlugin } from 'vitepress-plugin-search'

export default {
  title: 'Useful',
  titleTemplate: 'Dev Blog',
  description: 'Prakashs Dev Blog',
  lang: 'en-UK',
  base: '/blog/',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    outlineTitle: 'Contents',
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
            { text: 'Tips on Writing', link: '/learning/docs/my-docs' },
          ]
        },
        {
          text: 'Auth',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'OPA & Envoy', link: '/learning/auth/opa-envoy.md' },
            { text: 'OPA & Envoy pt2.', link: '/learning/auth/opa-envoy-pt2.md' },
          ]
        }
      ],
      '/courses/': [
        {
          items: [
            { text: 'Introduction', link: '/courses/' },
          ]
        },
        {
          text: 'Infrastructure As Code',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Intro', link: '/courses/IAC/' },
            // { text: 'Good Practices', link: '/courses/IAC/good-practices' },
            // { text: 'Pulumi vs Terraform', link: '/courses/IAC/pulumi-vs-terraform' },
            // {
            //   text: 'Pulumi',
            //   collapsible: true,
            //   collapsed: true,
            //   items: [
            //     { text: 'Intro', link: '/courses/IAC/pulumi/1-intro' },
            //   ]
            // }
          ]
        }
      ]
    }
  },
  vite:{
    plugins: [SearchPlugin()]
  },
  head: [[
    'script',
    {
      async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-8LZFH8JKKD',
    }],
    [
      'script', {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8LZFH8JKKD');",
    ]],
}