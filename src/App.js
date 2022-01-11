import "./styles.css";
import React from "react";

export default function App() {
  const [timer, setTimer] = React.useState(0);
  const timeRef = React.useRef();
  const [isrunning, setRunning] = React.useState(false);

  React.useEffect(() => {
    startTimer();
    return stoptimer;
  }, []);

  const startTimer = () => {
    if (isrunning) {
      return;
    }
    timeRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    setRunning(true);
  };
  const stoptimer = () => {
    clearInterval(timeRef.current);
    setRunning(false);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{timer}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stoptimer}>Stop</button>
    </div>
  );
}
