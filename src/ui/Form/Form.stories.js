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

const name = 'Form'
const category = `${storyConfig.componentPrefix}${name}`
const config = storyConfigHelpers.getConfig({ name })

storiesOf(category, module).add('Form', Form, config)

storiesOf(category, module).add('Form Grid', FormGrid, config)

storiesOf(category, module).add('Form Grid with Form Row', FormGridFormRow, config)

storiesOf(category, module).add('Inline Form', FormInline, config)

storiesOf(category, module).add('Form Validation', FormFeedback, config)

storiesOf(category, module).add('Input Types', InputType, config)

storiesOf(category, module).add('Inline checkboxes', InlineCheckboxes, config)

storiesOf(category, module).add('Input Sizing', InputSizing, config)

storiesOf(category, module).add('Input Grid Sizing', InputGridSizing, config)

storiesOf(category, module).add('Hidden Labels', LabelHidden, config)

storiesOf(category, module).add('Custom Inputs', CustomControls, config)
