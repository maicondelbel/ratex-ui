import { StoryObj, Meta } from '@storybook/react'

import { Text, ITextProps } from '@ratex-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis mi a tortor sagittis, ut luctus purus pretium. Duis vitae vulputate quam. Phasellus tellus augue, lacinia eget magna sit amet,',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITextProps>

export const Primary: StoryObj<ITextProps> = {}

export const StrongText: StoryObj<ITextProps> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis mi a tortor sagittis, ut luctus purus pretium. Duis vitae vulputate quam. Phasellus tellus augue, lacinia eget magna sit amet,',
    as: 'strong',
  },
}
