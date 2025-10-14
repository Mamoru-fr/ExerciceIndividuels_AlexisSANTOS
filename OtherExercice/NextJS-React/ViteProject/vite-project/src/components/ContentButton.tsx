import {useView} from "../context/ViewContext";

type Props = {
    text: string;
    value: number;
    firstcondition: number;
    secondcondition: number;
}

const ContentButton = ({text, value, firstcondition, secondcondition}: Props) => {
  const {view, setView} = useView();
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