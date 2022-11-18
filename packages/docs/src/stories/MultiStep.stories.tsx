import { StoryObj, Meta } from '@storybook/react'

import { MultiStep, IMultiStepProps, Box } from '@ratex-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    steps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<IMultiStepProps>

export const Primary: StoryObj<IMultiStepProps> = {
  args: {},
}

export const Full: StoryObj<IMultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
