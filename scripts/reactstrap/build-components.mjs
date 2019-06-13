import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { __dirname } from '../utils.mjs'
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

  Object.keys(schema).forEach(key => {
    createComponent({ name: key })
    createSass({ name: key })
  })
})
