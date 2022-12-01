import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 2rem))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 2rem))` },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  padding: '$3 1.25rem',
  alignItems: 'start',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$1',
})

export const ToastClose = styled(Toast.Close, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  all: 'unset',
  position: 'absolute',
  width: '$5',
  color: '$white',
  right: '$4',
  top: '$4',
  cursor: 'pointer',
})
