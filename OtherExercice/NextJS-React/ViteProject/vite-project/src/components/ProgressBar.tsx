import React from 'react';
import {useTasks} from "../context/TasksContext";

type Props = {
  style?: React.CSSProperties;
}

const ProgressBar = ({style}: Props) => {
  const {progress, goal} = useTasks();
  const percentage = (progress / goal) * 100;
  return (
    <div style={{...styles.container, ...style}}>
      <div
        style={{
          ...styles.progressBar,
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
    margin: '20px 0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#4caf50',
    transition: 'width 0.3s ease-in-out',
  },
};

export default ProgressBar;
