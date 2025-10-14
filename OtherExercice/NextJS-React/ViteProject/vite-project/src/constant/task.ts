import type React from "react";

export type TaskItem = {
    id: number | string;
    Text: string;
    isCompleted: boolean;
    isUrgent: boolean;
}

type AddTaskProps = {
    inputValue: string;
    isUrgent: boolean;
    setResult: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setGoal: React.Dispatch<React.SetStateAction<number>>;
}

export function addTask({inputValue, isUrgent, setResult, setInputValue, setGoal}: AddTaskProps) {
    const text = inputValue.trim();
    if (!text) return;
    
    const newTask: TaskItem = {
        id: Date.now(),
        Text: text,
        isCompleted: false,
        isUrgent: isUrgent,
    };
    
    setResult(prev => [...prev, newTask]);
    setInputValue('');
    setGoal(g => g + 1);
    console.log(newTask);
}