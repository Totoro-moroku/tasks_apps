import { Database } from '@/types/schema'
import { Card, CardHeader, Typography } from '@material-tailwind/react'

type Task = Database['public']['Tables']['tasks']["Row"]

type Props = {
  tasks: Task[]
}

const TasksListBase: React.FC<Props> = ({ tasks }) => {
  console.log(tasks);

  const task = ['ヘッダー','ヘッダー','ヘッダー','ヘッダー']

  return (
    <div
      className="flex-grow"
      role="grid"
    >
      <div role="row" aria-rowindex={1}>
        {task.map((item, index) => (
          <div
            key={index}
            role="columnheader"
            aria-colindex={index + 1}
            aria-rowspan={index + 1}
          >
            {item}
          </div>
        ))}
      </div>
      <div role="row" aria-rowindex={2}>
        {task.map((item, index) => (
          <div
            key={index}
            role="columnheader"
            aria-colindex={index + 1}
            aria-rowspan={index + 1}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TasksListBase
