import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Form from './examples/Form'
import CustomControls from './examples/CustomControls'
import FormGrid from './examples/FormGrid'
import FormGridFormRow from './examples/FormGridFormRow'
import FormInline from './examples/FormInline'
import FormFeedback from './examples/FormFeedback'
import InputType from './examples/InputType'
import InlineCheckboxes from './examples/InlineCheckboxes'
import InputSizing from './examples/InputSizing'
import InputGridSizing from './examples/InputGridSizing'
import LabelHidden from './examples/LabelHidden'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Form' })
  }
}

storiesOf('UI|Form', module).add('Form', Form, config)

storiesOf('UI|Form', module).add('Form Grid', FormGrid, config)

storiesOf('UI|Form', module).add('Form Grid with Form Row', FormGridFormRow, config)

storiesOf('UI|Form', module).add('Inline Form', FormInline, config)

storiesOf('UI|Form', module).add('Form Validation', FormFeedback, config)

storiesOf('UI|Form', module).add('Input Types', InputType, config)

storiesOf('UI|Form', module).add('Inline checkboxes', InlineCheckboxes, config)

storiesOf('UI|Form', module).add('Input Sizing', InputSizing, config)

storiesOf('UI|Form', module).add('Input Grid Sizing', InputGridSizing, config)

storiesOf('UI|Form', module).add('Hidden Labels', LabelHidden, config)

storiesOf('UI|Form', module).add('Custom Inputs', CustomControls, config)
