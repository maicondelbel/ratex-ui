import { StoryObj, Meta } from '@storybook/react'

import { Heading, IHeadingProps } from '@ratex-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IHeadingProps>

export const Primary: StoryObj<IHeadingProps> = {}

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    children: 'H1 Custom Title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, Heading sempre será um `h2`, mas podemos alterar com a propriedade `as`.',
      },
    },
  },
}
