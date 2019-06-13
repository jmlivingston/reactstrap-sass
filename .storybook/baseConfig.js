import packageJson from '../package.json'

const baseConfig = {
  options: {
    options: {
      isToolshown: true,
      showPanel: true,
      theme: {
        brandTitle: packageJson.name
      }
    },
    info: {
      disable: process.env.STORYBOOK_DEBUG === 'true',
      header: false,
      inline: true,
      textRender: ({ name }) => `import ${name} from 'reactstrap-sass/cjs/ui/${name}'`
    }
  }
}

export default baseConfig
