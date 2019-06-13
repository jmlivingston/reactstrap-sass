import fs from 'fs'
import path from 'path'
import { getFilesFolders } from '../utils.mjs'

const reactStrapPath = './node_modules/reactstrap/es'
const fileFilter = ['index', 'setupTests', 'utils']

const reactStrapFiles = getFilesFolders(reactStrapPath)
  .filter(file => !/index|setupTests|utils/.test(file))
  .reduce((acc, file) => {
    const baseName = path.basename(file).split('.')[0]
    return {
      ...acc,
      [baseName]: {
        sassPaths: ['_functions', '_mixins', '_variables', `_${baseName.toLowerCase()}`],
        sassValided: false,
        reactstrapDocsPath: baseName.toLowerCase()
      }
    }
  }, {})

fs.writeFileSync('scripts/reactstrap/schema.json', JSON.stringify(reactStrapFiles, null, 2))
