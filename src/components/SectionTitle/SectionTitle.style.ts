import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    fontSize: '2rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '1.25rem',
    paddingBottom: '1.25rem',
    color: theme.colors.gray[7],
    ':before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '1px',
      bottom: '1px',
      background: theme.colors.gray[3],
    },
    ':after': {
      content: '""',
      position: 'absolute',
      width: '40%',
      height: '3px',
      bottom: 0,
      background: theme.fn.darken(theme.fn.primaryColor(), 0.1),
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}))
