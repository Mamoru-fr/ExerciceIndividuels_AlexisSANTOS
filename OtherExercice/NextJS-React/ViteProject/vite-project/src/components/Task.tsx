// React
import React from 'react';

// Types Definition
import type {TaskItem} from '../constant/task';

// Context
import {useTasks} from '../context/TasksContext';

// Components
import {TaskButton} from './TaskButton';

// Props definition
type Props = {
    id: number | string;
    item: TaskItem;
    style?: React.CSSProperties;
}

export const Task = ({item, id, style}: Props) => {
    const {setResult, setTask} = useTasks();

    const toggleCompleted = () => {
        setResult(prev => prev.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t));
    }
    const toggleUrgent = () => {
        setResult(prev => prev.map(t => t.id === id ? {...t, isUrgent: !t.isUrgent} : t));
    }

    return (
        <div key={id} style={{...styles.list, ...style}}>
            <div style={styles.taskLeftPart}>
                <TaskButton
                    buttonName='Completed'
                    buttonText={item.isCompleted ? '✅' : '⭕'}
                    buttonAction={toggleCompleted}
                    style={{backgroundColor: item.isCompleted ? '#30f93050' : 'transparent'}}
                />
                <span style={styles.itemText}>{item.Text}</span>
            </div>
            <div style={styles.taskRightPart}>
                {
                    !item.isCompleted ? (
                        <div>
                            <TaskButton
                                buttonName="Do Task"
                                buttonText='Do Task'
                                buttonAction={() => setTask(item)}
                                style={{backgroundColor: '#1b18f190'}}
                            />
                            <TaskButton
                                buttonName='Urgent Task'
                                buttonText={item.isUrgent ? '‼️' : '⚪'}
                                buttonAction={toggleUrgent}
                                style={{backgroundColor: item.isUrgent ? '#f5424250' : 'transparent'}}
                            />
                        </div>
                    ) : null
                }
                <div>
                    <TaskButton
                        buttonName="Delete Task"
                        buttonText="🗑️"
                        buttonAction={() => {
                            setResult(prev => prev.filter(t => t.id !== id));
                        }}
                        style={{backgroundColor: '#f54242'}}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    itemText: {
        marginRight: 12,
        display: 'inline-block',
    },
    list: {
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
    },
    taskLeftPart: {
        justifyContent: 'start',
    },
    taskRightPart: {
        justifyContent: 'end',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    }
};