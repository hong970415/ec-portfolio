import { MouseEvent } from 'react'
import { ActionIcon, Affix, Transition, rem, useMantineTheme } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons-react'

export default function BackToTopButton() {
  const theme = useMantineTheme()
  const [scroll, scrollTo] = useWindowScroll()
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    scrollTo({ y: 0 })
  }
  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }} zIndex={199}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            color={theme.primaryColor}
            size="xl"
            radius="xl"
            variant="filled"
            style={transitionStyles}
            onClick={handleOnClick}
          >
            <IconArrowUp size="1.5rem" />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  )
}
