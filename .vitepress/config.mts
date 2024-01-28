import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bookmarks/',
  title: "My Personal Bookmarks",
  description: "A Personal Bookmarks",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' }
    // ],

    sidebar: [
      {
        text: '编程导航',
        items: [
          { text: '全栈开发', link: '/full-stack' },
          { text: 'Node.js', link: '/nodejs' },
          { text: 'Vue', link: '/vue' },
          { text: 'React', link: '/react' },
          { text: 'CSS', link: '/css' },
          { text: 'Vite', link: '/vite' },
          { text: '其他', link: '/other' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
