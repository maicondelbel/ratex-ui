import * as ToastRadix from '@radix-ui/react-toast'

import {
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
  ToastRoot,
} from './styles'

import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export interface IToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  content: string
}

export function Toast({ title, content, ...props }: IToastProps) {
  return (
    <ToastRadix.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{content}</ToastDescription>
        <ToastClose asChild>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
