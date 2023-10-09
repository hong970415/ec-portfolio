import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  root: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
  title: {
    color: theme.colors.gray[7],
    marginTop: theme.spacing.md,
  },
  text: {
    textAlign: 'start',
    marginTop: theme.spacing.sm,
    color: theme.colors.gray[9],
  },
}))
