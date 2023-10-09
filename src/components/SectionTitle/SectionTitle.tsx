import { Title } from '@mantine/core'
import useStyles from './SectionTitle.style'

export interface SectionTitleProps {
  text: string
}
export default function SectionTitle({ text }: SectionTitleProps) {
  const { classes } = useStyles()
  return (
    <Title order={2} className={classes.root} data-cy="title">
      {text}
    </Title>
  )
}
