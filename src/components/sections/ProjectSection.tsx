import { Container, SimpleGrid } from '@mantine/core'
import GalleryCard from '../GalleryCard/GalleryCard'
import data from '@/data/data'

export default function ProjectSection() {
  return (
    <Container>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: 'sm', cols: 1 },
          { maxWidth: 'md', cols: 2 },
        ]}
      >
        {data.projects.map((item) => {
          return (
            <GalleryCard
              key={item.title}
              title={item.title}
              text={item.text}
              imgs={[...item.images]}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}
