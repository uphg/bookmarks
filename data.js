const data = [
  {
    title: '常用网站',
    fileName: 'index',
    group: [
      {
        title: '最常用',
        items: [
          { text: '哔哩哔哩', link: 'https://www.bilibili.com/', },
          // { text: 'Google 翻译', link: 'https://translate.google.com/?hl=zh-CN', icon: '//ssl.gstatic.com/translate/favicon.ico' },
          { text: 'Notion', link: 'https://www.notion.so/', icon: 'https://www.notion.so/images/favicon.ico' },
          { text: 'ChatGPT - Poe', link: 'https://poe.com/ChatGPT', icon: 'https://psc2.cf2.poecdn.net/favicon.svg' },
        ]
      },
      {
        title: 'React',
        items: [
          { text: 'Next.js', link: 'https://nextjs.org/' },
          {
            text: "CSS 阴影生成器",
            link: "https://www.cssmatic.com/box-shadow",
            icon: 'https://www.cssmatic.com/box-shadow/img/favicon.png'
          },
        ]
      }
    ]
  },
  {
    title: 'Vue',
    fileName: 'vue',
    group: [
      {
        title: '组件库',
        items: [
          { text: 'Hacker News', link: 'https://news.ycombinator.com/' },
          { text: 'V2EX', link: 'https://www.v2ex.com/' },
          { text: 'Ruby China', link: 'https://ruby-china.org/', icon: '//l.ruby-china.com/photo/2016/c309db0b49cab85a32f756541ea0e2b0.png' },
          { text: 'Product Hunt', link: 'https://www.producthunt.com/' },
        ]
      },
      {
        title: '最佳实践',
        items: [
          { text: 'Dribbble', link: 'https://dribbble.com/', icon: 'https://cdn.dribbble.com/assets/dribbble-vector-ball-f320a6ba48a4ccf416ef6e396e204c899874565b694593834b6c23f978394498.svg' },
          { text: 'Designspiration', link: 'https://www.designspiration.com/' },
          { text: 'Behance', link: 'https://www.behance.net/' },
          { text: '站酷', link: 'https://www.zcool.com.cn/' }
        ]
      }
    ]
  },
  {
    title: '全栈开发',
    fileName: 'full-stack',
    group: [
      {
        title: '全栈框架',
        items: [
          { text: 'Prisma - Node.js and TypeScript ORM', link: 'https://www.prisma.io/', icon: 'https://www.prisma.io/images/favicon-32x32.png' },
          { text: 'tRPC', link: 'https://trpc.io/', icon: 'https://trpc.io/img/favicon.ico' },
        ]
      }
    ]
  }
]

export default data