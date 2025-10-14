import {useEffect, useState} from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import {Task} from './components/Task'
import {TaskInputBar} from './components/TaskInputBar'
import type {TaskItem} from './constant/task'

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [result, setResult] = useState<TaskItem[]>([])
  const [goal, setGoal] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [view, setView] = useState<number>(0)

  useEffect(() => {
    setProgress(result.filter(item => item.isCompleted).length)
  }, [result])

  return (
    <>
      <h2>Bienvenue dans mon "application"!</h2>
      <TaskInputBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        setResult={setResult}
        setGoal={setGoal}
      />
      <ProgressBar progress={progress} goal={goal} />
      <div style={{gap: 8, display: 'flex', marginBottom: 16, justifyContent: 'center'}}>
        <button
          type="button"
          onClick={() => setView(v => (v === 0 ? 1 : 0))}
          style={{backgroundColor: view === 0 ? '#008000ff' : '#ccc'}}
        >
          Non complétées
        </button>
        <button
          type="button"
          onClick={() => setView(v => (v === 1 ? 0 : 1))}
          style={{backgroundColor: view === 1 ? '#008000ff' : '#ccc'}}
        >
          Complétées
        </button>
      </div>
      <p>{view === 0 ? 'Voir les tâches en cours' : 'Voir toutes les tâches complétées'}</p>
      {view === 0 ? (
        <div>
          <div>
            <p>Il y a {result.filter(item => item.isUrgent).length} tâches urgentes</p>
            <ul style={style.listWrapper}>
              {result.filter(item => item.isUrgent && !item.isCompleted).map((item) => (
                <Task
                  key={item.id}
                  id={item.id}
                  item={item}
                  setResult={setResult} />
              ))}
            </ul>
          </div>
          <div>
            <p>Il y a {result.filter(item => !item.isUrgent).length} tâches non urgentes</p>
            <ul style={style.listWrapper}>
              {result.filter(item => !item.isUrgent && !item.isCompleted).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  id={item.id}
                  setResult={setResult} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
            <p>Il y a {result.filter(item => item.isCompleted).length} tâches complétées</p>
            <ul style={style.listWrapper}>
              {result.filter(item => item.isCompleted).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  id={item.id}
                  setResult={setResult} />
              ))}
            </ul>
          </div>
      )
      }
    </>
  )
}

const style = {
  listWrapper: {
    paddingInlineStart: 0,
    textAlign: 'left' as const,
  },
};

export default App
