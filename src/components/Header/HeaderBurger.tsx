import { ActionIcon, Affix, Burger, rem, useMantineTheme } from '@mantine/core'
import { IconLayoutList, IconX } from '@tabler/icons-react'
import useStyles from './HeaderBurger.style'

interface HeaderBurgerProps {
  opened: boolean
  handlers: {
    readonly open: () => void
    readonly close: () => void
    readonly toggle: () => void
  }
}

const affixPos = { top: rem(20), right: rem(20) }
export default function HeaderBurger({ opened, handlers: { toggle } }: HeaderBurgerProps) {
  const { classes } = useStyles({ opened })
  return (
    <Affix position={affixPos}>
      <ActionIcon size="xl" radius="xl" variant="filled" onClick={toggle} className={classes.icon}>
        {opened ? <IconX /> : <IconLayoutList />}
      </ActionIcon>
    </Affix>
  )
}
