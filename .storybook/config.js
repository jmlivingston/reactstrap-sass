import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters, configure } from '@storybook/react'
import '../src/ui/BaseStyle/BaseStyle.scss'
import { baseConfig } from './baseConfig'

addDecorator(withInfo)
addDecorator(withA11y)
addParameters(baseConfig.options)

require('../src/documentation/documentation.stories')

const req = require.context('../src/ui', true, /\.stories\.js$/)
function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename))
}

configure(loadStories, module)
