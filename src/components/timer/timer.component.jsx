import { useEffect, useState } from "react";

function Timer(props) {
  const { originalTimer, gameStarted, handleGameOver } = props;
  let timerId = undefined;
  const [timer, setTimer] = useState(originalTimer);
  
  useEffect(() => {
    if (gameStarted) {
      timerId = setInterval(() => {
        let nextTimer;
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          if (nextTimer == 0) {
            handleGameOver();
            clearInterval(timerId);
          }
          return nextTimer;
        });
      }, 1000);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);

  return (
    timer
  );
}
export default Timer;
