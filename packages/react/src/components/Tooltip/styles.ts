import { styled, keyframes } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateX(2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateX(0)',
  },
})

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  fontFamily: '$default',
  borderRadius: '$sm',
  color: '$gray100',
  padding: '$3 $4',
  zIndex: '9999',

  '& svg': {
    fill: '$gray900',
  },

  '&[data-side="top"]': {
    animation: `${slideDownAndFade} 200ms ease-out`,
  },
  '&[data-side="right"]': {
    animation: `${slideLeftAndFade} 200ms ease-out`,
  },
  '&[data-side="left"]': {
    animation: `${slideRightAndFade} 200ms ease-out`,
  },
  '&[data-side="bottom"]': {
    animation: `${slideUpAndFade} 200ms ease-out`,
  },
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  width: 'fit-content',
})
