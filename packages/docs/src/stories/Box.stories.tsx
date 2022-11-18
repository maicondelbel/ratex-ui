import { StoryObj, Meta } from '@storybook/react'

import { Box, IBoxProps, Text } from '@ratex-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<IBoxProps>

export const Primary: StoryObj<IBoxProps> = {}
