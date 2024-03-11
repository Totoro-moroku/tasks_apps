import Layout from '@/components/common/layouts/Layout'

import { useEffect, useState } from 'react'

import type { Database } from '@/types/schema'
import { getTasks } from '@/api/tasks';
import TasksLayout from '@/components/tasks/list/TasksLayout';
import TasksListBase from '@/components/tasks/list/TasksListBase';
import TasksFilters from '@/components/tasks/list/TasksFilters'

type Task = Database['public']['Tables']['tasks']['Row']

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasks().then((res) => {
      if(!res) return console.log('error')
      setTasks(res)
    })
    console.log('TaskList')
  }, [])

  return (
    <Layout type="normal" title="task list">
      <div className="fixed h-full pt-12">
        <TasksLayout header={<TasksFilters/>}>
          <TasksListBase tasks={tasks} />
        </TasksLayout>
      </div>
    </Layout>
  )
}

export default TaskList
