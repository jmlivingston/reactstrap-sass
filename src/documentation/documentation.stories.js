import { storiesOf } from '@storybook/react'
import marked from 'marked'
import React from 'react'
import { storyConfig } from '../../.storybook/storyConfig'
import readMe from '../../README.md'

storiesOf('Documentation | Welcome', module).add('Read Me', () => <div />, {
  ...storyConfig.options,
  options: {
    ...storyConfig.options.options,
    isToolshown: false,
    showPanel: false
  },
  info: {
    ...storyConfig.options.info,
    header: false,
    text: marked(readMe), // HACK: Until this bug is fixed: https://github.com/storybookjs/storybook/issues/6981
    inline: true,
    disable: false,
    source: false
  }
})
