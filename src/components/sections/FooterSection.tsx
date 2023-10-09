import { Container, Title, Text, Group, ActionIcon, useMantineTheme } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import data from '@/data/data'
import useStyles from './FooterSection.style'

const socialLinks = [
  {
    icon: <IconBrandLinkedin size="1.3rem" />,
    link: data.about.linkedin,
  },
  {
    icon: <IconBrandGithub size="1.3rem" />,
    link: data.about.github,
  },
]
export default function FooterSection() {
  const theme = useMantineTheme()
  const { classes } = useStyles()
  return (
    <Container className={classes.root} data-cy={'footer'}>
      <Title order={3} className={classes.title}>
        {data.about.name}
      </Title>
      <Group position="center" pb="1rem">
        {socialLinks.map((item) => (
          <a key={item.link} href={item.link} target="_blank">
            <ActionIcon color={theme.primaryColor} size="lg" radius="xl" variant="filled">
              {item.icon}
            </ActionIcon>
          </a>
        ))}
      </Group>
      <Text className={classes.copyright}>
        {data.about.copyrightTexts[0]}
        <strong>{data.about.copyrightTexts[1]}</strong>
        {data.about.copyrightTexts[2]}
      </Text>
    </Container>
  )
}
