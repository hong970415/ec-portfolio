import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  root: {
    padding: '2rem 1rem',
    background: theme.colors.gray[2],
    textAlign: 'center',
    width: '100%',
    maxWidth: '100%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: theme.colors.gray[7],
    marginBottom: '1rem',
  },
  copyright: {
    color: theme.colors.gray[7],
    fontSize: '0.9rem',
  },
}))
