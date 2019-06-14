import { storiesOf } from '@storybook/react'
import { baseConfigHelpers } from '../../../.storybook/baseConfig'
import Progress from './examples/Progress'
import ProgressAnimated from './examples/ProgressAnimated'
import ProgressColor from './examples/ProgressColor'
import ProgressLabels from './examples/ProgressLabels'
import ProgressMax from './examples/ProgressMax'
import ProgressMulti from './examples/ProgressMulti'
import ProgressStriped from './examples/ProgressStriped'

const config = baseConfigHelpers.getConfig({ name: 'Progress' })

storiesOf('UI|Progress', module).add('Progress', Progress, config)

storiesOf('UI|Progress', module).add('Color Variants', ProgressColor, config)

storiesOf('UI|Progress', module).add('Labels', ProgressLabels, config)

storiesOf('UI|Progress', module).add('Striped', ProgressAnimated, config)

storiesOf('UI|Progress', module).add('Animated', ProgressStriped, config)

storiesOf('UI|Progress', module).add('Multiple bars / Stacked', ProgressMulti, config)

storiesOf('UI|Progress', module).add('Max value', ProgressMax, config)
