import { ReactNode } from 'react'
import { MotionProps, motion } from 'framer-motion'

const motionFadeOpts: MotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1 },
}
export default function MotionFadeWrapper({ children }: { children: ReactNode }) {
  return <motion.div {...motionFadeOpts}>{children}</motion.div>
}
