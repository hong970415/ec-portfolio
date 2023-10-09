import { createStyles } from '@mantine/core'

export default createStyles((theme, { opened }: { opened: boolean }) => ({
  icon: {
    background: opened ? theme.fn.primaryColor() : 'transparent',
    color: opened ? theme.white : theme.colors.gray[9],
    transition: 'all 0.3s',
    '>svg': {
      width: '1.5rem',
      height: '1.5rem',
    },
    ['@media (hover: hover)']: {
      ':hover': {
        background: theme.fn.primaryColor(),
        color: theme.white,
      },
    },
  },
}))
