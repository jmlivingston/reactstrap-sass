import fs from 'fs'
import { EOL } from 'os'
import path from 'path'
import { getFilesFolders } from '../utils.mjs'

const reactstrapPath = '../reactstrap'

if (!fs.existsSync(reactstrapPath)) {
  console.log('Please clone reactstrap so that it is a sibling to this project.')
} else {
  const reactstrapDocsPath = reactstrapPath + '/docs/lib/Components/'

  const fileFilter = ['index', 'setupTests', 'utils']

  function getPage(componentName) {
    const singular = `${componentName}Page.js`
    const plural = `${componentName}sPage.js`
    if (fs.existsSync(`${reactstrapDocsPath}${singular}`)) {
      return singular.replace(path.extname(singular), '')
    } else if (fs.existsSync(`${reactstrapDocsPath}${plural}`)) {
      return plural.replace(path.extname(singular), '')
    }
  }

  function getExamples(pageName, componentName) {
    if (pageName) {
      const page = fs.readFileSync(`${reactstrapDocsPath}${pageName}.js`).toString()
      const sections = page.split(EOL).filter(line => line.includes('<SectionTitle>'))
      const pageLines = page.split(EOL)
      return pageLines
        .filter(line => line.includes('import') && line.includes('examples'))
        .map((line, index) => {
          let title = sections[index]
            ? sections[index]
                .trim()
                .match(/>(.*)</)[1]
                .trim()
            : undefined
          title = title === 'Properties' ? componentName : title
          const fileName = line
            .replace(/"/g, "'")
            .slice(line.lastIndexOf('/') + 1, line.lastIndexOf("'"))
            .replace(/'/g, '')
          return {
            fileName,
            title: title || `TODO: ${fileName}`,
            description: ''
          }
        })
    }
  }

  const reactStrapFiles = getFilesFolders(reactstrapPath + '/src', false)
    .filter(file => !/index|setupTests|utils/.test(file))
    .reduce((acc, file) => {
      const componentName = path.basename(file).replace(path.extname(file), '')
      const pageFileName = getPage(componentName)
      return {
        ...acc,
        [componentName]: {
          sassPaths: ['_functions', '_mixins', '_variables', `_${componentName.toLowerCase()}`],
          validated: false,
          pageFileName,
          examples: getExamples(pageFileName, componentName)
        }
      }
    }, {})

  fs.writeFileSync('scripts/reactstrap/schema.json', JSON.stringify(reactStrapFiles, null, 2))
}
