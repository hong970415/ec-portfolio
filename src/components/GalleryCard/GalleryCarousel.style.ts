import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  slideImg: {
    cursor: 'pointer',
    objectFit: 'contain !important' as 'contain',
  },
  leftNav: {
    position: 'absolute',
    zIndex: 4,
    opacity: 0.4,
    top: '50%',
    left: 0,
    transform: 'translate(30%,-50%) !important',
  },
  rightNav: {
    position: 'absolute',
    zIndex: 4,
    opacity: 0.4,
    top: '50%',
    right: 0,
    transform: 'translate(-30%,-50%) !important',
  },
}))
