import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { prettierString, __dirname } from '../utils.mjs'
import schema from './schema.json'

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

prompt.question('What is your Bootstrap SASS path? (Default: ~bootstrap/scss/)', bootstrapBasePath => {
  bootstrapBasePath = bootstrapBasePath || '~bootstrap/scss/'
  function getFilePath({ name }) {
    return path.join(__dirname, `../src/ui/${name}/`)
  }

  function createComponent({ name }) {
    let code = `import ${name} from 'reactstrap/es/${name}'
import './${name}.scss'
export default ${name}`
    const filePath = path.join(`${getFilePath({ name })}${name}.js`)
    fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
    code = prettierString(code)
    fs.writeFileSync(filePath, code)
  }

  function createSass({ name }) {
    let code = schema[name].sassPaths.map(sassPath => `@import '${bootstrapBasePath}${sassPath}';`).join('\r\n')
    const filePath = path.join(`${getFilePath({ name })}${name}.scss`)
    fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
    fs.writeFileSync(filePath, code)
  }

  function createTest({ name }) {
    let code = `/* eslint-disable no-console */
// Note: Simple smoke test as reactstrap has more in-depth tests.
import React from 'react'
import ReactDOM from 'react-dom'
import ${name} from './${name}'

it('${name} - renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<${name}  />, div)
  ReactDOM.unmountComponentAtNode(div)
})    
  `
    const filePath = path.join(`${getFilePath({ name })}${name}.test.js`)
    fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true })
    code = prettierString(code)
    fs.writeFileSync(filePath, code)
  }

  Object.keys(schema).forEach(name => {
    createComponent({ name })
    createSass({ name })
    // TODO: Do we want or really need tests? If so, Jest needs to be able to transform ES modules.
    // createTest({ name })
  })
  prompt.close()
})
