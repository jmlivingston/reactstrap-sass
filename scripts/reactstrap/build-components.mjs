import cheerio from 'cheerio'
import fs from 'fs'
import fetch from 'node-fetch'
import path from 'path'
import unescape from 'unescape'
import { __dirname } from '../utils.mjs'
import schema from './schema.json'

const bootstrapBasePath = '~bootstrap/scss/' // TOOD: Should be prompt
const reactstrapBaseUrl = 'https://raw.githubusercontent.com/reactstrap/reactstrap.github.io/master/components/'

function getFilePath({ name }) {
  return path.join(__dirname, `../src/ui/${name}/`)
}

function createComponent({ name }) {
  const code = `import ${name} from 'reactstrap/es/${name}'
import './${name}.scss'
export default ${name}`
  const filePath = path.join(`${getFilePath({ name })}${name}.js`)
  fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
  fs.writeFileSync(filePath, code)
}

function createSass({ name }) {
  const code = schema[name].sassPaths.map(sassPath => `@import '${bootstrapBasePath}${sassPath}';`).join('\r\n')
  const filePath = path.join(`${getFilePath({ name })}${name}.scss`)
  fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
  fs.writeFileSync(filePath, code + '\r\n')
}

function parseCode({ exampleName, name, code }) {
  if (code.includes("from 'reactstrap'")) {
    return code
      .split('\n')
      .map(line => {
        if (line.includes("from 'reactstrap'")) {
          const components = line.match(/{(.*)}/)[1]
          return components
            .trim()
            .split(',')
            .map(component => `import ${component.trim()} from '../${component.trim()}/${component.trim()}'`)
            .join('\n')
        } else {
          return line.replace('class Example', `class ${exampleName}`).replace('export default', '')
        }
      })
      .join('\n')
  } else {
    return `import ${name} from './${name}'

function ${exampleName}() {
  return <>
    ${code}
  </>
}

`
  }
}

async function createExamples({ name }) {
  try {
    // uncomment once ready
    const response = await fetch(`${reactstrapBaseUrl}${schema[name].reactstrapDocsPath}/index.html`)
    const html = await response.text()
    // fs.writeFileSync('test.html', html)

    // remove once ready
    // const html = fs.readFileSync(path.join(__dirname, '../scripts/reactstrap/test.html')).toString()
    const $ = cheerio.load(html)
    let componentSchema = {}
    $('aside.docSearch-content code.language-jsx').each(function(index) {
      const title =
        index === 0
          ? `${name} - Basic`
          : $(this)
              .parent()
              .prevAll('h3')
              .eq(0)
              .text()
              .trim()
      const description = $(this)
        .parent()
        .prev()
        .prev()
        .is('p')
        ? $(this)
            .parent()
            .prev()
            .prev()
            .html()
        : ''
      const isProperties =
        $(this)
          .parent()
          .prev()
          .text()
          .trim()
          .toLowerCase() === 'properties'
      if (!isProperties) {
        const code = unescape($(this).html())
        if (componentSchema[title]) {
          componentSchema[title].code += '<br />' + code
        } else {
          componentSchema[title] = {
            code,
            description
          }
        }
      }
    })
    console.log('=======================================================')
    console.log(componentSchema)
    console.log('=======================================================')

    Object.keys(componentSchema).map((key, index) => {
      const filePath = path.join(`${getFilePath({ name })}Example${index}.stories.js`)
      const code = `import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import packageJson from '../../../package.json'
${componentSchema[key].code.includes('import React') ? '' : "import React from 'react'"}
${parseCode({ code: componentSchema[key].code, exampleName: `Example${index}`, name })}

storiesOf('${name}', module).add('${key}', Example${index}, {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: '${name}' })
  }
})
      `
      fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
      fs.writeFileSync(filePath, code + '\r\n')
    })
  } catch (err) {
    console.log(err)
  }
}

Object.keys(schema)
  .filter(key => key === 'Button')
  .forEach(key => {
    createComponent({ name: key })
    createSass({ name: key })
    createExamples({ name: key })
  })
