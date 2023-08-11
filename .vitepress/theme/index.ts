// https://vitepress.dev/guide/custom-theme
import './style.css'
import { h } from 'vue'
import Theme from 'vitepress/theme'
import LinkIcon from '../components/LinkIcon.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('LinkIcon', LinkIcon)
  }
}
