import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Progress from './examples/Progress'
import ProgressColor from './examples/ProgressColor'
import ProgressLabels from './examples/ProgressLabels'
import ProgressAnimated from './examples/ProgressAnimated'
import ProgressStriped from './examples/ProgressStriped'
import ProgressMulti from './examples/ProgressMulti'
import ProgressMax from './examples/ProgressMax'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Progress' })
  }
}

storiesOf('UI|Progress', module).add('Color Variants', Progress, config)

storiesOf('UI|Progress', module).add('Labels', ProgressColor, config)

storiesOf('UI|Progress', module).add('Striped', ProgressLabels, config)

storiesOf('UI|Progress', module).add('Animated', ProgressAnimated, config)

storiesOf('UI|Progress', module).add('Multiple bars / Stacked', ProgressStriped, config)

storiesOf('UI|Progress', module).add('Max value', ProgressMulti, config)

storiesOf('UI|Progress', module).add('TODO: ProgressMax', ProgressMax, config)
