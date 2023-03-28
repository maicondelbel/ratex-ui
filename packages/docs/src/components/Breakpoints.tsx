import { breakpoints } from '@ratex-ui/tokens'

export function Breakpoints() {
  return Object.entries(breakpoints).map(([key, value]) => {
    return (
      <div
        key={key}
        style={{ backgroundColor: value, padding: '2rem', maxWidth: '320px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: '#FFFFFF',
          }}
        >
          <strong>${key}</strong>
          <span>{value}</span>
        </div>
      </div>
    )
  })
}
