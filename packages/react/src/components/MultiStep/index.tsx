import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface IMultiStepProps {
  steps: number
  currentStep?: number
}

export function MultiStep({ steps, currentStep = 1 }: IMultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {steps}
      </Label>
      <Steps css={{ '--step-sizes': steps }}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
