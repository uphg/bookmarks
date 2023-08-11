import { defineConfig } from 'vitepress'
import data from '../data'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // sidebar: [
    //   {
    //     text: '常用书签',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: createSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },
  }
})

function createSidebar() {
  return [
    {
      text: '常用书签',
      items: data.map(item => ({
        text: item.title,
        link: item.fileName === 'index' ? '/' : `/${item.fileName}`
      }))
    }
  ]
}
