import { storiesOf } from '@storybook/react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import CustomControls from './examples/CustomControls'
import Form from './examples/Form'
import FormFeedback from './examples/FormFeedback'
import FormGrid from './examples/FormGrid'
import FormGridFormRow from './examples/FormGridFormRow'
import FormInline from './examples/FormInline'
import InlineCheckboxes from './examples/InlineCheckboxes'
import InputGridSizing from './examples/InputGridSizing'
import InputSizing from './examples/InputSizing'
import InputType from './examples/InputType'
import LabelHidden from './examples/LabelHidden'

const config = storyConfigHelpers.getConfig({ name: 'Form' })

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Form', Form, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Form Grid', FormGrid, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Form Grid with Form Row', FormGridFormRow, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Inline Form', FormInline, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Form Validation', FormFeedback, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Input Types', InputType, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Inline checkboxes', InlineCheckboxes, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Input Sizing', InputSizing, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Input Grid Sizing', InputGridSizing, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Hidden Labels', LabelHidden, config)

storiesOf(`${storyConfig.componentPrefix}Form`, module).add('Custom Inputs', CustomControls, config)
