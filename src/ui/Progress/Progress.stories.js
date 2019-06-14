import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Progress from './examples/Progress'
import ProgressAnimated from './examples/ProgressAnimated'
import ProgressColor from './examples/ProgressColor'
import ProgressLabels from './examples/ProgressLabels'
import ProgressMax from './examples/ProgressMax'
import ProgressMulti from './examples/ProgressMulti'
import ProgressStriped from './examples/ProgressStriped'

const config = storyConfigHelpers.getConfig({ name: 'Progress' })

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Progress', Progress, config)

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Color Variants', ProgressColor, config)

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Labels', ProgressLabels, config)

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Striped', ProgressAnimated, config)

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Animated', ProgressStriped, config)

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Multiple bars / Stacked', ProgressMulti, config)

storiesOf(`${storyConfig.componentPrefix}Progress`, module).add('Max value', ProgressMax, config)
