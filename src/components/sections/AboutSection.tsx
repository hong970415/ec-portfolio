import { Container, Flex, List, SimpleGrid, Text, useMantineTheme } from '@mantine/core'
import { IconChevronRight, IconPoint } from '@tabler/icons-react'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import data from '@/data/data'

interface BasicItem {
  title: string
  text: string
}

const basicData = [
  {
    title: 'City',
    text: data.about.city,
  },
  {
    title: 'Email',
    text: data.about.email,
  },
  {
    title: 'Github',
    text: data.about.github,
  },
]
export default function AboutSection() {
  const theme = useMantineTheme()

  // introduction element
  const introductionEl = <Text pb="2rem">{data.about.introduction}</Text>

  // basic elements
  const basicPointIcon = <IconChevronRight color={theme.fn.primaryColor()} />
  const renderBasicItem = (item: BasicItem) => {
    return (
      <List.Item key={item.text}>
        <Flex>
          <Text mr="sm" weight={700}>
            {item.title}:
          </Text>
          <Text>{item.text}</Text>
        </Flex>
      </List.Item>
    )
  }
  const basicEl = (
    <Flex sx={{ textAlign: 'start', justifyContent: 'center' }}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <List spacing="xs" icon={basicPointIcon}>
          {basicData.filter((item, index) => index < basicData.length / 2).map(renderBasicItem)}
        </List>
        <List spacing="xs" icon={basicPointIcon}>
          {basicData.filter((item, index) => index >= basicData.length / 2).map(renderBasicItem)}
        </List>
      </SimpleGrid>
    </Flex>
  )

  // skill elements
  const skillPointIcon = <IconPoint color={theme.fn.primaryColor()} />
  const renderSkillItem = (item: string) => {
    return (
      <List.Item key={item}>
        <Text>{item}</Text>
      </List.Item>
    )
  }
  const skillEl = (
    <Container px="1rem" pt="3.75rem">
      <SectionTitle text="Skills" />
      <Flex sx={{ textAlign: 'start', justifyContent: 'center' }}>
        <SimpleGrid cols={2}>
          <List spacing="xs" icon={skillPointIcon}>
            {data.about.skills
              .filter((item, index) => index < data.about.skills.length / 2)
              .map(renderSkillItem)}
          </List>
          <List spacing="xs" icon={skillPointIcon}>
            {data.about.skills
              .filter((item, index) => index >= data.about.skills.length / 2)
              .map(renderSkillItem)}
          </List>
        </SimpleGrid>
      </Flex>
    </Container>
  )
  return (
    <>
      {introductionEl}
      {basicEl}
      {skillEl}
    </>
  )
}
