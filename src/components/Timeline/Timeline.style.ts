import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  root: {
    width: '100%',
    padding: '0rem',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 700,
    margin: '1.25rem 0rem',
    color: theme.colors.gray[7],
  },
  subTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: theme.fn.darken(theme.fn.primaryColor(), 0.1),
    textTransform: 'uppercase',
    marginBottom: theme.spacing.sm,
  },
  year: {
    background: theme.colors.gray[1],
    color: theme.colors.gray[7],
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.sm,
  },
  organization: {
    fontSize: theme.fontSizes.md,
    fontStyle: 'italic',
    marginBottom: theme.spacing.sm,
  },
  last: {
    display: 'none',
  },
}))
