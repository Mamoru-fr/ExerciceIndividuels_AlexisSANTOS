import React from 'react';

type Props = {
    buttonName: string,
    buttonText: string
    style?: React.CSSProperties
    buttonAction: () => void
}

export const TaskButton = ({buttonName, buttonAction, buttonText, style}: Props) => {
    return (
        <button
            type="button"
            aria-label={buttonName}
            onClick={() => {
                buttonAction()
            }}
            style={{...styles.button, ...style}}
        >
            {buttonText}
        </button>
    )
}

const styles = {
    button: {
        padding: '6px 10px',
        fontSize: 14,
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        marginRight: 8,
    },
}