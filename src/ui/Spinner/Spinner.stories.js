import { storiesOf } from '@storybook/react';
import { storyConfig, storyConfigHelpers } from '../../../.storybook/storyConfig';
import Spinner from './examples/Spinner';
import SpinnerGrower from './examples/SpinnerGrower';

const config = storyConfigHelpers.getConfig({ name: 'Spinner' })

storiesOf(`${storyConfig.componentPrefix}Spinner`, module).add('Spinner', Spinner, config)

storiesOf(`${storyConfig.componentPrefix}Spinner`, module).add('Growing Spinner', SpinnerGrower, config)
