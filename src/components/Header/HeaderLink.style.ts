import { createStyles } from '@mantine/core'

export default createStyles(
  (theme, { isActive, isExpand }: { isActive: boolean; isExpand: boolean }) => ({
    navLink: {
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: '0.625rem 1.125rem',
      marginBottom: '0.5rem',
      height: '3.5rem',
      transition: 'all 0.3s',
      width: isExpand ? '100%' : '3.5rem',
      background: isActive ? theme.fn.primaryColor() : theme.colors.gray[1],
      color: isActive ? theme.white : theme.colors.gray[7],
      borderRadius: theme.radius.xl,
      ':hover': {
        width: '100%',
        background: theme.fn.primaryColor(),
        color: theme.white,
        '>span': {
          display: 'block',
        },
      },
      // icon
      '>svg': {
        flex: '0 0 auto',
        width: '1.25rem',
        height: '1.25rem',
      },
      // text
      '>span': {
        display: isExpand ? 'block' : 'none',
        paddingLeft: '0.5rem',
      },
    },
  })
)
