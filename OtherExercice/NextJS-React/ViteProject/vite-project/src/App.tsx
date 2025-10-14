// React
import {useEffect, useState} from 'react'

// Components
import ProgressBar from './components/ProgressBar'
import {TaskInputBar} from './components/TaskInputBar'
import ContentButton from './components/ContentButton'
import TaskSection from './components/TaskSection'

// Context
import {TasksProvider} from './context/TasksContext'
import {ViewProvider} from './context/ViewContext'
import {ThemeProvider} from './context/ThemeContext'

// Types
import type {TaskItem} from './constant/task'

// Styles
import './App.css'

function App() {
  // Local state is created here and provided to children via the providers below.

  // All States related to tasks
  const [inputValue, setInputValue] = useState<string>('') // Controlled input value in the input field
  const [result, setResult] = useState<TaskItem[]>([]) // All tasks created
  const [goal, setGoal] = useState<number>(0) // Total number of tasks created
  const [progress, setProgress] = useState<number>(0) // Progress of completed tasks

  // Update progress whenever the result (tasks) change
  useEffect(() => {setProgress(result.filter(item => item.isCompleted).length)}, [result])

  // -------------------------------------------------------------------------------------------------------

  // State related to view
  // View state: 0 = non completed tasks, 1 = completed tasks
  const [view, setView] = useState<number>(0)

  // -------------------------------------------------------------------------------------------------------

  // State related to theme
  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  // Update the body class when the theme changes
  useEffect(() => { document.body.className = theme}, [theme])

  // -------------------------------------------------------------------------------------------------------

  return (
    <ThemeProvider value={{
      theme, setTheme, toggleTheme
    }}>
    {/* Context for view state */}
    <ViewProvider value={
      {
        view, setView
      }
    }>
    {/* Context for tasks state */}
      <TasksProvider value={
        {
          result, setResult,
          inputValue, setInputValue,
          goal, setGoal,
          progress, setProgress
        }
      }>
      {/* Big Container */}
        <div style={{maxWidth: 600, margin: '0 auto', padding: 16}}>
          <h2>Bienvenue dans ma "To Do List"!</h2>
          <TaskInputBar />
          <ProgressBar />
          {/* Buttons to toggle views */}
          <div style={{gap: 8, display: 'flex', marginBottom: 16, justifyContent: 'center'}}>
            <ContentButton
              text="Non complétées"
              value={0}
              firstcondition={1}
              secondcondition={0}
            />
            <ContentButton
              text="Complétées"
              value={1}
              firstcondition={0}
              secondcondition={1}
            />
          </div>
          <p>{view === 0 ? 'Voir les tâches en cours' : 'Voir toutes les tâches complétées'}</p>
          {view === 0 ? (
            <div>
              <TaskSection title="tâches urgentes" items={
                result.filter((item) => item.isUrgent && !item.isCompleted)
              } />
              <TaskSection title="tâches non urgentes" items={
                result.filter((item) => !item.isUrgent && !item.isCompleted)
              } />
            </div>
          ) : (
            <TaskSection title="tâches complétées" items={
              result.filter((item) => item.isCompleted)
            } />
          )
          }
        </div>
      </TasksProvider>
    </ViewProvider>
    </ThemeProvider>
  )
}

export default App
