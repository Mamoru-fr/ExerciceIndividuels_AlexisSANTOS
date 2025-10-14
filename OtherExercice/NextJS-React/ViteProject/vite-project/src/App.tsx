import {useEffect, useState} from 'react'

// Components
import ProgressBar from './components/ProgressBar'
import {TaskInputBar} from './components/TaskInputBar'
import ContentButton from './components/ContentButton'
import TaskSection from './components/TaskSection'

// Constants
import type {TaskItem} from './constant/task'

// Styles
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [result, setResult] = useState<TaskItem[]>([])
  const [goal, setGoal] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [view, setView] = useState<number>(0)

  useEffect(() => {setProgress(result.filter(item => item.isCompleted).length)}, [result])

  return (
    <>
      <h2>Bienvenue dans mon "application"!</h2>
      <TaskInputBar inputValue={inputValue} setInputValue={setInputValue} setResult={setResult} setGoal={setGoal} />
      <ProgressBar progress={progress} goal={goal} />
      <div style={{gap: 8, display: 'flex', marginBottom: 16, justifyContent: 'center'}}>
        <ContentButton view={view} setView={setView} text="Non complétées" value={0} firstcondition={1} secondcondition={0} />
        <ContentButton view={view} setView={setView} text="Complétées" value={1} firstcondition={0} secondcondition={1} />
      </div>
      <p>{view === 0 ? 'Voir les tâches en cours' : 'Voir toutes les tâches complétées'}</p>
      {view === 0 ? (
        <div>
          <TaskSection title="tâches urgentes" items={result.filter((item) => item.isUrgent && !item.isCompleted)} setResult={setResult} />
          <TaskSection title="tâches non urgentes" items={result.filter((item) => !item.isUrgent && !item.isCompleted)} setResult={setResult} />
        </div>
      ) : (
        <TaskSection title="tâches complétées" items={result.filter((item) => item.isCompleted)} setResult={setResult} />
      )
      }
    </>
  )
}

export default App
