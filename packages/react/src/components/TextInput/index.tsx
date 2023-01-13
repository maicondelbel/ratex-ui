import { ComponentProps, ForwardedRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface ITextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

function TextInputInner(
  { prefix, ...props }: ITextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
}

export const TextInput = forwardRef(TextInputInner)

TextInput.displayName = 'TextInput'
