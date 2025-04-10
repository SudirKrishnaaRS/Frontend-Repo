import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const bars = [5, 10, 25, 50, 75, 90, 100];

  return (
    <>
      <h2>Progress Bar</h2>
      {bars.map((bar, index) => {
        return <ProgressBar key={index} progress={bar} />;
      })}
    </>
  );
}

export default App;
