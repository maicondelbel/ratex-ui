import { StoryObj, Meta } from '@storybook/react'

import { Avatar, IAvatarProps } from '@ratex-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/maicondelbel.png',
    alt: 'Maicon P. Del Bel',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<IAvatarProps>

export const Primary: StoryObj<IAvatarProps> = {}

export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: undefined,
  },
}
