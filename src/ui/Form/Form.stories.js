import { storiesOf } from '@storybook/react'
import baseConfig from '../../../.storybook/baseConfig'
import Example0Form from './examples/Example0Form'
import Example10CustomControls from './examples/Example10CustomControls'
import Example1FormGrid from './examples/Example1FormGrid'
import Example2FormGridFormRow from './examples/Example2FormGridFormRow'
import Example3FormInline from './examples/Example3FormInline'
import Example4FormFeedback from './examples/Example4FormFeedback'
import Example5InputType from './examples/Example5InputType'
import Example6InlineCheckboxes from './examples/Example6InlineCheckboxes'
import Example7InputSizing from './examples/Example7InputSizing'
import Example8InputGridSizing from './examples/Example8InputGridSizing'
import Example9LabelHidden from './examples/Example9LabelHidden'

const config = {
  ...baseConfig.options,
  info: {
    ...baseConfig.options.info,
    text: baseConfig.options.info.textRender({ name: 'Form' })
  }
}

storiesOf('UI|Form', module).add('Form', Example0Form, config)

storiesOf('UI|Form', module).add('Form Grid', Example1FormGrid, config)

storiesOf('UI|Form', module).add('Form Grid with Form Row', Example2FormGridFormRow, config)

storiesOf('UI|Form', module).add('Inline Form', Example3FormInline, config)

storiesOf('UI|Form', module).add('Form Validation', Example4FormFeedback, config)

storiesOf('UI|Form', module).add('Input Types', Example5InputType, config)

storiesOf('UI|Form', module).add('Inline checkboxes', Example6InlineCheckboxes, config)

storiesOf('UI|Form', module).add('Input Sizing', Example7InputSizing, config)

storiesOf('UI|Form', module).add('Input Grid Sizing', Example8InputGridSizing, config)

storiesOf('UI|Form', module).add('Hidden Labels', Example9LabelHidden, config)

storiesOf('UI|Form', module).add('Custom Inputs', Example10CustomControls, config)
