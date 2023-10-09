import { Text, Title } from '@mantine/core'
import TypewriterComponent from 'typewriter-effect'
import useHeader, { HeaderListItem } from '@/hooks/useHeader'
import Header from '@/components/Header/Header'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import FooterSection from '@/components/sections/FooterSection'
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton'
import MotionFadeWrapper from '@/components/MotionFadeWrapper/MotionFadeWrapper'
import data from '@/data/data'
import useStyles from '@/styles/index.style'

export default function Home() {
  const { classes } = useStyles()
  const { headerLists, activeSection } = useHeader()
  const renderHeroSection = (item: HeaderListItem, index: number) => {
    return (
      <section
        key={item.id}
        id={item.id}
        className={classes.heroSectionRoot}
        ref={item.ref}
        data-cy={`section${item.id}`}
      >
        <MotionFadeWrapper>
          <Title order={1} className={classes.heroSectionTitle}>
            {data.about.name}
          </Title>

          <Text className={classes.heroSectionDescription}>
            {data.about.description}
            <Text span className={classes.heroSectionTypingText}>
              <TypewriterComponent
                component="span"
                options={{
                  strings: [...data.about.descriptionTypingText],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Text>
        </MotionFadeWrapper>
      </section>
    )
  }
  const renderOtherSections = (item: HeaderListItem, index: number) => {
    return (
      <section
        key={item.id}
        id={item.id}
        className={classes.sectionContainerRoot}
        ref={item.ref}
        data-cy={`section${item.id}`}
      >
        <MotionFadeWrapper>
          <SectionTitle text={item.text} />
          {item.children}
        </MotionFadeWrapper>
      </section>
    )
  }
  return (
    <>
      <Header data={headerLists} activeSection={activeSection} />
      <main>
        {headerLists &&
          headerLists.map((item, index) => {
            if (item.id === 'hero') {
              return renderHeroSection(item, index)
            }
            return renderOtherSections(item, index)
          })}
      </main>
      <FooterSection />
      <BackToTopButton />
    </>
  )
}
