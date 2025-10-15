import React, {createContext, useContext} from 'react'
import type {TaskItem} from '../constant/task'

type TasksContextValue = {
  result: TaskItem[]
  setResult: React.Dispatch<React.SetStateAction<TaskItem[]>>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  goal: number
  setGoal: React.Dispatch<React.SetStateAction<number>>
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
  task: TaskItem | undefined
  setTask: React.Dispatch<React.SetStateAction<TaskItem | undefined>>
}

const TasksContext = createContext<TasksContextValue | undefined>(undefined)

export const TasksProvider = TasksContext.Provider

export function useTasks() {
  const ctx = useContext(TasksContext)
  if (!ctx) throw new Error('useTasks must be used within a TasksProvider')
  return ctx
}
