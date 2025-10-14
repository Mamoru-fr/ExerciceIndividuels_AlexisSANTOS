import type {TaskItem} from '../constant/task';

type Props = {
    id: number | string;
    item: TaskItem;
    setResult: React.Dispatch<React.SetStateAction<TaskItem[]>>;
    style?: React.CSSProperties;
}

export const Task = ({item, id, setResult, style}: Props) => {
    const toggleCompleted = () => {
        setResult(prev => prev.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t));
    }
    const toggleUrgent = () => {
        setResult(prev => prev.map(t => t.id === id ? {...t, isUrgent: !t.isUrgent} : t));
    }

    return (
        <div key={id} style={{...styles.list, ...style}}>
            <div style={styles.taskLeftPart}>
                <button
                    type="button"
                    aria-label={`Completed`}
                    onClick={() => {
                        toggleCompleted();
                    }}
                    style={{...styles.button.completeButton, backgroundColor: item.isCompleted ? '#30f93050' : 'transparent'}}
                >
                    {item.isCompleted ? '✅' : '⭕'}
                </button>
                <span style={styles.itemText}>{item.Text}</span>
            </div>
            {
                !item.isCompleted ? (
                    <button
                        type="button"
                        aria-label={`Urgent Task`}
                        onClick={() => {
                            toggleUrgent();
                        }}
                        style={{...styles.button.urgentButton, backgroundColor: item.isUrgent ? '#f5424250' : 'transparent'}}
                    >
                        {item.isUrgent ? '‼️' : '⚪'}
                    </button>
                ) : null
            }

        </div>
    )
}

const styles = {
    button: {
        completeButton: {
            padding: '6px 10px',
            fontSize: 14,
            backgroundColor: '#30f93050',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            marginRight: 8,
        },
        urgentButton: {
            padding: '6px 10px',
            fontSize: 14,
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
        },
    },
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
    }
};