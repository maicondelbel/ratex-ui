import { StoryObj, Meta } from '@storybook/react'

import { Toast, IToastProps } from '@ratex-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Toast Title',
    content: 'This is a Toast Content',
    open: true,
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [(Story) => Story()],
} as Meta<IToastProps>

export const Primary: StoryObj<IToastProps> = {}
