import { MouseEvent, MouseEventHandler } from 'react'
import { ActionIcon, AspectRatio } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import useStyles from './GalleryCarousel.style'

interface GalleryCarouselProps {
  imgs: Array<string>
  onClickImg: (event: MouseEvent<HTMLImageElement>) => void
}

export default function GalleryCarousel({ imgs, onClickImg }: GalleryCarouselProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { classes } = useStyles()

  // img element
  const renderItem = (item: ReactImageGalleryItem) => (
    <AspectRatio ratio={1920 / 1080}>
      <img loading="lazy" className={classes.slideImg} src={item.original} onClick={onClickImg} />
    </AspectRatio>
  )
  const makeReactImageGalleryItems = () => {
    return imgs.map((img) => ({
      original: img,
      thumbnail: img,
      renderItem: renderItem,
    }))
  }

  // left and right button
  const iconOpts = {
    size: isMobile ? 'md' : 'lg',
    radius: 'xl',
    variant: 'filled',
  }
  const renderLeftNav = (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => (
    <ActionIcon {...iconOpts} onClick={onClick} disabled={disabled} className={classes.leftNav}>
      <IconChevronLeft size="1.5rem" />
    </ActionIcon>
  )
  const renderRightNav = (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => (
    <ActionIcon {...iconOpts} onClick={onClick} disabled={disabled} className={classes.rightNav}>
      <IconChevronRight size="1.5rem" />
    </ActionIcon>
  )

  return (
    <ReactImageGallery
      autoPlay
      infinite
      showBullets
      slideInterval={5000}
      showThumbnails
      showFullscreenButton={false}
      showPlayButton={false}
      items={makeReactImageGalleryItems()}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
    />
  )
}
