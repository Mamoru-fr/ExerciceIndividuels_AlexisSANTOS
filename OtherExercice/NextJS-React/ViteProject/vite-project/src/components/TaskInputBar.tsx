import {useState} from "react";
import {addTask} from '../constant/task';
import {useTasks} from "../context/TasksContext";

export const TaskInputBar = () => {
    const { inputValue, setInputValue, setResult, setGoal } = useTasks()
    const [isUrgent, setIsUrgent] = useState(false);

    return (
        <div>
            <input
                style={style.input}
                value={inputValue}
                placeholder='Entrez quelque chose'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask({inputValue, isUrgent, setResult, setInputValue, setGoal})
                    }
                }}
            />
            <button
                type="button"
                aria-label={`Urgent Task`}
                onClick={() => {
                    setIsUrgent(prev => !prev);
                }}
                style={{...style.urgentButton, backgroundColor: isUrgent ? '#f54242' : '#ccc'}}
            >
                Urgent
            </button>
            <button
                type="button"
                aria-label={`New Task`}
                onClick={() => {
                    addTask({inputValue, isUrgent, setResult, setInputValue, setGoal});
                    setIsUrgent(false);
                }}
                style={{...style.urgentButton, backgroundColor: '#3ae5e8ff'}}
            >
                New Task
            </button>
        </div>
    )
}

const style = {
    input: {
        padding: 10,
        borderRadius: 5,
        border: '1px solid #ccc',
        fontSize: 16,
    },
    urgentButton: {
        marginLeft: 8,
    },
};