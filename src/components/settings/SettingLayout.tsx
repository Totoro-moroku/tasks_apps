import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SettingMenu from '@/components/settings/SettingMenu'
import Main from "@/components/common/layouts/Main";

type Props = {
  children: ReactNode
}

export default function SettingLayout({ children }: Props) {
  return (
    <Main sideMenu={<SettingMenu />} className="overflow-y-scroll">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Main>
  )
}
