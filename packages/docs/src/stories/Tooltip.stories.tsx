import { StoryObj, Meta } from '@storybook/react'

import { Tooltip, ITooltipProps, Text, Box } from '@ratex-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Hover the mouse over this text.</Text>,
    content: 'Testando',
    side: 'top',
  },
  decorators: [
    (Story) => {
      return <Box css={{ padding: '$16' }}>{Story()}</Box>
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    side: {
      options: ['left', 'right', 'bottom', 'top'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITooltipProps>

export const Primary: StoryObj<ITooltipProps> = {}
