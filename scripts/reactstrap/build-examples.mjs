import fs from 'fs'
import { EOL } from 'os'
import path from 'path'
import { prettierString, __dirname } from '../utils.mjs'
import schema from './schema.json'

const reactstrapPath = '../reactstrap'

function getFilePath({ name }) {
  return path.join(__dirname, `../src/ui/${name}/`)
}

function parseCode({ exampleName, name, code }) {
  if (code.includes("from 'reactstrap'")) {
    return code
      .split(EOL)
      .map(line => {
        if (line.includes("from 'reactstrap'")) {
          const components = line.match(/{(.*)}/)
          return components
            ? components[1]
                .trim()
                .split(',')
                .map(component => `import ${component.trim()} from '../../${component.trim()}/${component.trim()}'`)
                .join('\n')
            : line.replace('reactstrap', '../../TODO')
        } else {
          return line.replace('class Example', `class ${exampleName}`) //.replace('export default', '')
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

function copyExamples({ name }) {
  if (schema[name].examples) {
    schema[name].examples.forEach((example, index) => {
      const exampleName = `Example${index}${example.fileName}`
      let code = fs.readFileSync(path.join(reactstrapPath, `docs/lib/examples/${example.fileName}.js`)).toString()
      code = prettierString(code)
      code = parseCode({ name, exampleName, code })
      code = prettierString(code)
      const filePath = path.join(`${getFilePath({ name })}`, `examples/${exampleName}.js`)
      fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
      fs.writeFileSync(filePath, code)
    })
  }
}

function createStories({ name }) {
  if (schema[name].examples) {
    const filePath = path.join(`${getFilePath({ name })}/${name}.stories.xjs`)
    let code = `import { storiesOf } from '@storybook/react'
import storyConfig from '../../../.storybook/storyConfig'
import packageJson from '../../../package.json'
import React from 'react'
${schema[name].examples
  .map(
    (example, index) => `import Example${index}${example.fileName} from './examples/Example${index}${example.fileName}'`
  )
  .join('\n')}

${schema[name].examples
  .map(
    (example, index) => `storiesOf('${name}', module).add('${example.title}', Example${index}${example.fileName}, {
  ...storyConfig.options,
  info: {
    ...storyConfig.options.info,
    text: storyConfig.options.info.textRender({ name: '${name}' })
  }
})`
  )
  .join('\n')}
      `
    fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
    code = prettierString(code)
    fs.writeFileSync(filePath, code)
  }
}

Object.keys(schema).forEach(name => {
  copyExamples({ name })
  createStories({ name })
})
