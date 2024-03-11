import Link from 'next/link'
import { useRouter } from 'next/router'

import List from '@material-tailwind/react/components/List'
import {
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react/components/List'

import useLocale from '@/hooks/useLocale'

export default function TasksMenu() {
  const { t } = useLocale()

  return (
    <div className="border-b-2 border-base-20 sm:h-full sm:min-w-[160px] bg-base-20">
      <div className="sm:min-w-[160px] p-0">
        a
      </div>
    </div>
  )
}
