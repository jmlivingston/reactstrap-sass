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
  try {
    let componentSchema = {}
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
  // .filter(key => key.toLowerCase().includes('pop'))
  .forEach(name => {
    copyExamples({ name })
    // createStories({ name })
  })
