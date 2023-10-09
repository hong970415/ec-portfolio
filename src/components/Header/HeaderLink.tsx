import { MouseEvent } from 'react'
import { Text } from '@mantine/core'
import useStyles from './HeaderLink.style'

interface HeaderLinkProps {
  id: string
  icon: JSX.Element
  text: string
  isActive: boolean
  isExpand: boolean
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function HeaderLink({
  id,
  icon,
  text,
  isActive,
  isExpand,
  onClick,
}: HeaderLinkProps) {
  const { classes } = useStyles({ isActive, isExpand })
  return (
    <a className={classes.navLink} href={`#${id}`} onClick={onClick}>
      {icon}
      <Text span>{text}</Text>
    </a>
  )
}
