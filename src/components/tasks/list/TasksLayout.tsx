import { ReactNode } from 'react'
import clsx from 'clsx'
import TasksMenu from '@/components/tasks/TasksMenu'
import { Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react'

type Props = {
  header?: ReactNode
  children: ReactNode
  className?: string
}
export default function TasksLayout({ header, children, className}: Props) {
  return (
    <div className="flex flex-col h-full sm:flex-row">
      <TasksMenu />
      <div>
        <div className='bottom-0 '></div>
      </div>
    </div>
  )
}

