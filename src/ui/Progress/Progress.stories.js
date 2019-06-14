import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Progress from './examples/Progress'
import ProgressAnimated from './examples/ProgressAnimated'
import ProgressColor from './examples/ProgressColor'
import ProgressLabels from './examples/ProgressLabels'
import ProgressMax from './examples/ProgressMax'
import ProgressMulti from './examples/ProgressMulti'
import ProgressStriped from './examples/ProgressStriped'

const name = 'Progress'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Progress', Progress, config)

storiesOf(category, module).add('Color Variants', ProgressColor, config)

storiesOf(category, module).add('Labels', ProgressLabels, config)

storiesOf(category, module).add('Striped', ProgressStriped, config)

storiesOf(category, module).add(
  'Animated',
  ProgressAnimated,
  storyConfigHelpers.getConfig({
    name,
    description: `<p>The <code>animated</code> prop also adds the <code>striped</code> prop; there is no need to pass both.</p>`
  })
)

storiesOf(category, module).add('Multiple bars / Stacked', ProgressMulti, config)

storiesOf(category, module).add('Max value', ProgressMax, config)
