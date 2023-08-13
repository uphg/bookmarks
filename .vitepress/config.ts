import { defineConfig } from 'vitepress'
import data from '../data'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bookmarks/',
  title: "My Bookmarks",
  description: "A Bookmarks",
  srcDir: './posts',
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
      provider: 'local',
      options: {
        // detailed view will be disabled.
        detailedView: false
      }
    },
  }
})

function createSidebar() {
  return data.map(group => {
    return {
      text: group.title,
      items: group.items.map((item) => ({
        text: item.title,
        link: item.fileName === 'index' ? '/' : `/${item.fileName}`
      }))
    }
  })
}
