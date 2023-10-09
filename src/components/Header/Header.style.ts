import { createStyles } from '@mantine/core'

export default createStyles((theme, { isExpand }: { isExpand: boolean }) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9997,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem',
    overflowY: 'auto',
    transition: 'all 0.3s',
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    [theme.fn.smallerThan('sm')]: {
      background: theme.white,
      borderRight: `1px solid ${theme.colors.gray[2]}`,
      transform: isExpand ? 'translateX(0)' : 'translateX(-100%)',
    },
  },
}))
