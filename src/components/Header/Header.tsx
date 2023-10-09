import { MouseEvent } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { HeaderListItem } from '@/hooks/useHeader'
import HeaderBurger from './HeaderBurger'
import HeaderLink from './HeaderLink'
import useStyles from './Header.style'

interface HeaderProps {
  data: Array<HeaderListItem>
  activeSection: string
}
export default function Header({ data, activeSection }: HeaderProps) {
  const [burgerOpened, burgerHandlers] = useDisclosure(false)
  const { classes } = useStyles({ isExpand: burgerOpened })

  const handleOnClickLink = (event: MouseEvent<HTMLAnchorElement>) => {
    burgerHandlers.close()
  }
  const headerEl = (
    <header className={classes.root}>
      <nav>
        <ul>
          {data &&
            data.map((item) => {
              return (
                <li key={item.id}>
                  <HeaderLink
                    id={item.id}
                    icon={item.icon}
                    text={item.text}
                    isActive={activeSection === item.id}
                    isExpand={burgerOpened}
                    onClick={handleOnClickLink}
                  />
                </li>
              )
            })}
        </ul>
      </nav>
    </header>
  )
  return (
    <div data-cy={'header'}>
      <HeaderBurger opened={burgerOpened} handlers={burgerHandlers} />
      {headerEl}
    </div>
  )
}
