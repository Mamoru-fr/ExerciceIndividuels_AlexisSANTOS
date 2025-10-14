import {useState} from "react";
import {type TaskItem} from '../constant/task';

type Props = {
    inputValue: string;
    setInputValue: (value: string) => void;
    setResult: React.Dispatch<React.SetStateAction<TaskItem[]>>
    setGoal: (value: (prev: number) => number) => void;
}

export const TaskInputBar = ({inputValue, setInputValue, setResult, setGoal}: Props) => {
    const [isUrgent, setIsUrgent] = useState(false);


    const addTask = () => {
        const text = inputValue.trim();
        if (!text) return
        const newTask: TaskItem = {
            id: Date.now(),
            Text: text,
            isCompleted: false,
            isUrgent: isUrgent,
        };
        setResult(prev => [...prev, newTask])
        setInputValue('')
        setGoal(g => g + 1);
        setIsUrgent(false);
    }

    return (
        <div>
            <input
                style={style.input}
                value={inputValue}
                placeholder='Entrez quelque chose'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {if (e.key === 'Enter') {addTask()} }}
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