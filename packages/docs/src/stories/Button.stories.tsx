import { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

import { Button, IButtonProps } from '@ratex-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<IButtonProps>

export const Primary: StoryObj<IButtonProps> = {}

export const Secondary: StoryObj<IButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const Tertiary: StoryObj<IButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<IButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Small: StoryObj<IButtonProps> = {
  args: {
    size: 'sm',
    children: 'Send',
  },
}

export const Disabled: StoryObj<IButtonProps> = {
  args: {
    disabled: true,
  },
}
