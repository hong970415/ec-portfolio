import 'react-image-gallery/styles/css/image-gallery.css'
import { ActionIcon, Card, Modal, Text, Title, useMantineTheme } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { IconX } from '@tabler/icons-react'
import GalleryCarousel from './GalleryCarousel'
import useStyles from './GalleryCard.style'

interface GalleryCardProps {
  imgs: Array<string>
  title: string
  text: string
}

export default function GalleryCard({ imgs, title, text }: GalleryCardProps) {
  const theme = useMantineTheme()
  const [modalOpened, modalHandlers] = useDisclosure(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { classes } = useStyles()

  // carousel and slide
  const carouselEl = <GalleryCarousel imgs={imgs} onClickImg={modalHandlers.open} />

  // modal
  const modalEl = (
    <Modal.Root
      opened={modalOpened}
      onClose={modalHandlers.close}
      size="auto"
      yOffset="10vh"
      fullScreen={isMobile}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title></Modal.Title>
          <ActionIcon
            color={theme.primaryColor}
            size="xl"
            radius="xl"
            variant="filled"
            onClick={modalHandlers.close}
          >
            <IconX size="1.5rem" />
          </ActionIcon>
        </Modal.Header>
        <Modal.Body>{carouselEl} </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )

  return (
    <>
      {modalEl}
      <Card withBorder className={classes.root}>
        <Card.Section>{carouselEl}</Card.Section>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.text}>{text}</Text>
      </Card>
    </>
  )
}
