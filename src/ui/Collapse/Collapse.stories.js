import { storiesOf } from '@storybook/react'
import React from 'react'
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig'
import Collapse from './examples/Collapse'
import CollapseEvents from './examples/CollapseEvents'
import CollapseUncontrolled from './examples/CollapseUncontrolled'

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Collapse`, module).add(
  'Collapse',
  () => <Collapse />,
  storyConfigHelpers.getConfig({
    name: 'Collapse',
    description: ` <p>Properties: 
  Collapse is wrapped in a <code>Transition</code> component
  from <code>react-transition-group/transition</code>. Transition props are passed through to
  this wrapper. Refer to the <code>Transition</code> documentation for details: <a href="http://reactcommunity.org/react-transition-group/transition/">
  http://reactcommunity.org/react-transition-group/transition/</a>.
</p>`
  })
)

storiesOf(`${storyConfig.componentPrefix}Collapse`, module).add(
  'Events',
  () => <CollapseUncontrolled />,
  storyConfigHelpers.getConfig({
    name: 'Collapse',
    description: `<p>Use the <code>onEnter</code>, onEntering, onEntered, onExiting and onExited props for callbacks when the Collapse has finished opening (entering) or closing (exiting).</p>`
  })
)

// TODO: info broken due to hooks error
storiesOf(`${storyConfig.componentPrefix}Collapse`, module).add(
  'Uncontrolled Collapse',
  () => <CollapseEvents />,
  storyConfigHelpers.getConfig({
    name: 'Collapse',
    description: `<p>For the most basic use-case, an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. <code>UncontrolledCollapse</code> does not require an <code>isOpen</code> prop. Instead pass a <code>toggler</code> prop. The <code>toggler</code> prop is a string which will run querySelectorAll to find dom elements which will trigger toggle.</p>`
  })
)
