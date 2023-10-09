import { ReactNode, useEffect, useState } from 'react'
import { IconFile, IconHome2, IconNotebook, IconUser } from '@tabler/icons-react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'
import { HEADER_LIST } from '@/constants/header'
import AboutSection from '@/components/sections/AboutSection'
import ResumeSection from '@/components/sections/ResumeSection'
import ProjectSection from '@/components/sections/ProjectSection'

export interface HeaderListItem {
  ref: (node?: Element | null | undefined) => void
  id: string
  icon: JSX.Element
  text: string
  children?: ReactNode
}

export default function useHeader() {
  const [state, setState] = useState({ activeSection: 'hero' })
  const opts: IntersectionOptions = {
    rootMargin: '-70% 0px 0%',
    threshold: 0,
  }
  const [heroRef, heroInView, heroEntry] = useInView({
    ...opts,
  })
  const [aboutRef, aboutInView, aboutEntry] = useInView({
    ...opts,
  })
  const [resumeRef, resumeInView, resumeEntry] = useInView({
    ...opts,
  })
  const [projectRef, projectInView, projectEntry] = useInView({
    ...opts,
  })
  const headerLists = HEADER_LIST.map((item) => {
    item.id
    switch (item.id) {
      case 'hero':
        return { ...item, ref: heroRef, icon: <IconHome2 /> }
      case 'about':
        return { ...item, ref: aboutRef, icon: <IconUser />, children: <AboutSection /> }
      case 'resume':
        return { ...item, ref: resumeRef, icon: <IconFile />, children: <ResumeSection /> }
      case 'project':
        return { ...item, ref: projectRef, icon: <IconNotebook />, children: <ProjectSection /> }
      default:
        throw new Error('some headerlist not handled')
    }
  })
  useEffect(() => {
    if (heroEntry && aboutEntry && resumeEntry && projectEntry) {
      if (heroInView) {
        setState((prev) => ({ ...prev, activeSection: heroEntry.target.id }))
        return
      }
      if (aboutInView) {
        setState((prev) => ({ ...prev, activeSection: aboutEntry.target.id }))
        return
      }
      if (resumeInView) {
        setState((prev) => ({ ...prev, activeSection: resumeEntry.target.id }))
        return
      }
      if (projectInView) {
        setState((prev) => ({ ...prev, activeSection: projectEntry.target.id }))
        return
      }
    }
  }, [
    heroInView,
    heroEntry,
    aboutInView,
    aboutEntry,
    resumeInView,
    resumeEntry,
    projectInView,
    projectEntry,
  ])

  return {
    headerLists,
    activeSection: state.activeSection,
  }
}
