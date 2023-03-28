import { TooltipContainer, TooltipTrigger } from './styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

export interface ITooltipProps
  extends ComponentProps<typeof TooltipRadix.Root> {
  content: string
  side: 'left' | 'right' | 'bottom' | 'top'
}

export function Tooltip({
  content,
  children,
  side = 'top',
  ...props
}: ITooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipRadix.Portal>
          <TooltipContainer sideOffset={5} side={side}>
            {content}
            <TooltipRadix.Arrow />
          </TooltipContainer>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
