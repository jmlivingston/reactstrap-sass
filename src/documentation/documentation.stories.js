import { storiesOf } from '@storybook/react'
import marked from 'marked'
import React from 'react'
import baseConfig from '../../.storybook/baseConfig'
import readMe from '../../README.md'

storiesOf('Documentation|Welcome', module).add('Read Me', () => <div />, {
  ...baseConfig.options,
  options: {
    ...baseConfig.options.options,
    isToolshown: false,
    showPanel: false
  },
  info: {
    ...baseConfig.options.info,
    text: marked(readMe), // HACK: Until this bug is fixed: https://github.com/storybookjs/storybook/issues/6981
    inline: true,
    disable: false,
    source: false
  }
})
