// constants
import type {TaskItem} from '../constant/task';
import {Task} from './Task';

type Props = {
    title: string;
    items: TaskItem[];
    ulStyle?: React.CSSProperties;
}

export default function TaskSection({title, items, ulStyle}: Props) {
    return (
        <div>
            {
                items.length === 0 ?
                    null :
                    <p style={style.ListTitle}>Il y a {items.length} {title}</p>
            }
            <ul style={{...style.listWrapper, ...ulStyle}}>
                {items.map((item) => (
                    <Task key={item.id} id={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

const style = {
    listWrapper: {
        paddingInlineStart: 0,
        textAlign: 'left' as const,
    },
    ListTitle: {
        fontWeight: 'bold' as const,
        fontSize: 16,
        marginBottom: 8,
        borderBottom: '2px solid #ccc',
    }
};