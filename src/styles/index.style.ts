import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  // heroSection
  heroSectionRoot: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    letterSpacing: 2,
    paddingLeft: '10rem',
    paddingRight: '1rem',
    transition: 'all 0.3s',
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      background: "url('imgs/heroBg.jpg') top right no-repeat",
      backgroundSize: 'cover',
      opacity: 0.3,
    },
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: '1rem',
    },
  },
  heroSectionTitle: {
    fontSize: '4rem',
    fontWeight: 700,
    color: theme.colors.gray[7],
    [theme.fn.smallerThan('sm')]: {
      fontSize: '2rem',
      textAlign: 'center',
      transform: 'translateY(-40px)',
    },
  },
  heroSectionDescription: {
    fontSize: '1.625rem',
    color: theme.colors.gray[7],
    [theme.fn.smallerThan('sm')]: {
      fontSize: '1.25rem',
      textAlign: 'center',
      transform: 'translateY(-40px)',
    },
  },
  heroSectionTypingText: {
    color: theme.fn.primaryColor(),
  },
  //
  sectionContainerRoot: {
    padding: '3.75rem 3rem 3.75rem 1.5rem',
    textAlign: 'center',
    marginLeft: '100px',
    [theme.fn.smallerThan('sm')]: {
      marginLeft: '0rem',
      padding: '3.75rem 3rem',
    },
  },
}))
