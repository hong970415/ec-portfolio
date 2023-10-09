import { ReactNode } from 'react'
import { Container, Title, Timeline as MantineTimeline, Badge, Text } from '@mantine/core'
import useStyles from './Timeline.style'

export interface TimelineItemProps {
  subTitle: string
  year: string
  organization: string
  children: ReactNode | null
}
export interface TimelineProps {
  title: string
  data: Array<TimelineItemProps>
}

export default function Timeline({ title, data }: TimelineProps) {
  const { classes } = useStyles()

  const renderItem = (item: TimelineItemProps) => {
    return (
      <MantineTimeline.Item
        key={item.organization}
        title={
          <Title
            order={4}
            className={classes.subTitle}
            data-cy={`subTitle${item.organization}${item.subTitle}`}
          >
            {item.subTitle}
          </Title>
        }
      >
        <Badge
          size="lg"
          variant="light"
          className={classes.year}
          data-cy={`year${item.organization}${item.subTitle}`}
        >
          {item.year}
        </Badge>

        <Text className={classes.organization}>{item.organization}</Text>
        {item.children && item.children}
      </MantineTimeline.Item>
    )
  }
  return (
    <Container className={classes.root}>
      <Title order={3} className={classes.title} data-cy="title">
        {title}
      </Title>

      <MantineTimeline active={data.length} lineWidth={2}>
        {data && data.map(renderItem)}
        <MantineTimeline.Item className={classes.last}></MantineTimeline.Item>
      </MantineTimeline>
    </Container>
  )
}
