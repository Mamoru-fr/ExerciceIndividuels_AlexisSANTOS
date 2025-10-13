type Props = {
    progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.progressBar,
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#4caf50',
  },
};

export default ProgressBar;
