import { List, SimpleGrid, Text } from '@mantine/core'
import Timeline from '@/components/Timeline/Timeline'
import data from '@/data/data'
import useStyles from './ResumeSection.style'

export default function ResumeSection() {
  const { classes } = useStyles()

  // education exp
  const educationExpData = data.resume.educationExp.map((item) => ({ ...item, children: null }))

  // professional exp
  const renderDuty = (item: string) => (
    <List.Item className={classes.listItem} key={item}>
      <Text>{item}</Text>
    </List.Item>
  )
  const professionalExpData = data.resume.professionalExp.map((item) => ({
    ...item,
    children: <List>{item.duties.map(renderDuty)}</List>,
  }))

  return (
    <SimpleGrid
      className={classes.gridRoot}
      breakpoints={[
        { minWidth: 'xs', cols: 1 },
        { minWidth: 'sm', cols: 2 },
      ]}
    >
      <Timeline title="Education" data={educationExpData} />
      <Timeline title="Professional Experience" data={professionalExpData} />
    </SimpleGrid>
  )
}
