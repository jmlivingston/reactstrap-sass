import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Progress from './examples/Example0Progress'
import Example1ProgressColor from './examples/Example1ProgressColor'
import Example2ProgressLabels from './examples/Example2ProgressLabels'
import Example3ProgressAnimated from './examples/Example3ProgressAnimated'
import Example4ProgressStriped from './examples/Example4ProgressStriped'
import Example5ProgressMulti from './examples/Example5ProgressMulti'
import Example6ProgressMax from './examples/Example6ProgressMax'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Progress' })
  }
}

storiesOf('UI|Progress', module).add('Color Variants', Example0Progress, config)

storiesOf('UI|Progress', module).add('Labels', Example1ProgressColor, config)

storiesOf('UI|Progress', module).add('Striped', Example2ProgressLabels, config)

storiesOf('UI|Progress', module).add('Animated', Example3ProgressAnimated, config)

storiesOf('UI|Progress', module).add('Multiple bars / Stacked', Example4ProgressStriped, config)

storiesOf('UI|Progress', module).add('Max value', Example5ProgressMulti, config)

storiesOf('UI|Progress', module).add('TODO: ProgressMax', Example6ProgressMax, config)
