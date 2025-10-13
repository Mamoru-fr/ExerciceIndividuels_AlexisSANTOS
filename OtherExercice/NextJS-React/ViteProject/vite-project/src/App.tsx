import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState<string[]>([])

  // Delete handler: remove item at given index
  const handleDelete = (index: number) => {
    setResult(prev => prev.filter((_, i) => i !== index))
    console.log(result);
  }

  return (
    <>
      <h2>Bienvenue dans mon "application"!</h2>
      <input 
        style={style.input} 
        value={inputValue}
        placeholder='Entrez quelque chose' 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputValue.trim() !== '') {
            setResult([...result, inputValue.trim()])
            setInputValue('')
          }
        }} 
      />
      <p>Vous avez entré:</p>
      <ul style={style.listWrapper}>
        {result.map((item, index) => (
          <li key={index} style={style.list}>
            <span style={style.itemText}>{item}</span>
            <button
              type="button"
              aria-label={`Supprimer`}
              onClick={() => handleDelete(index)}
              style={style.deleteButton}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

const style = {
  input: {
    padding: 10,
    borderRadius: 5,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  list: {
    justifyContent: 'start',
  },
  listWrapper: {
    paddingInlineStart: 0,
    textAlign: 'left' as const,
  },
  itemText: {
    marginRight: 12,
    display: 'inline-block',
  },
  deleteButton: {
    padding: '6px 10px',
    fontSize: 14,
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  }
};

export default App
