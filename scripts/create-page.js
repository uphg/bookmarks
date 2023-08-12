import path from 'path'
import fs from 'fs-extra'
import { fileURLToPath } from 'url';
import { slugify } from '@mdit-vue/shared'
import data from '../data.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname, '../src')
const resolve = (p) => path.resolve(srcDir, p)

run()

async function run() {
  if (fs.existsSync(srcDir)) {
    await fs.remove(srcDir)
  }
  fs.mkdir(srcDir, { recursive: true })
  data.forEach((group) => {
    createGroup(group.items)
  })
}

function createGroup(data) {
  data.forEach(page => {
    const content = page.items.map(item => renderItem(item)).join('\n\n')
    fs.writeFile(
      resolve(`./${page.fileName}.md`),
      `# ${page.title}${page.description ? `\n\n${page.description}` : ''}\n\n${content}`,
      (e) => {
        if (e) {
          console.error('createGroup writeFile Error:')
          console.error(e)
        }
      }
    )
  });
}

function renderItem({ title, items }) {
  const links = items.map(item => {
    const slug = slugify(item.text)
    return `<a class="bookmarks-item" href="${item.link}" target="_blank"><LinkIcon${item.icon ? ` icon="${item.icon}"` : ''} link="${item.link}"/><h3 class="text" id="${slug}" tabindex="-1">${item.text}<a class="header-anchor" style="display: none;" href="#${slug}" aria-label="Permalink to &quot;${item.text}&quot;">​</a></h3></a>`
  }).join('')

  return (`
## ${title}

${links}`.trim())
}
