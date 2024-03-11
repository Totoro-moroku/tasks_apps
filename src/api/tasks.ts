import { supabase } from '@/utils/supabase'
import type { Database } from '@/types/schema'

type Task = Database['public']['Tables']['tasks']['Row']


async function getTasks() {
  try {
    const { data, error, status, statusText } = await supabase
      .from('tasks')
      .select('*')

    if (status !== 200 && statusText !== 'OK') {
      throw new Error(error?.message)
    }

    return data
  } catch (error) {}
}


export { getTasks }