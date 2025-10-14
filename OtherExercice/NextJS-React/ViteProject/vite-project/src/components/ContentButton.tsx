type Props = {
    view: number;
    setView: React.Dispatch<React.SetStateAction<number>>;
    text: string;
    value: number;
    firstcondition: number;
    secondcondition: number;
}

const ContentButton = ({view, setView, text, value, firstcondition, secondcondition}: Props) => {
    return (
        <button
          type="button"
          onClick={() => setView(v => (v === value ? firstcondition : secondcondition))}
          style={{backgroundColor: view === value ? '#008000ff' : '#ccc'}}
        >
          {text}
        </button>
    )
}

export default ContentButton;