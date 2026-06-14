import { useEffect, useState } from "react";

function Timer({ tiempoInicial, onTimeUp }) {
  const [time, setTime] = useState(tiempoInicial);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onTimeUp]);

  return (
    <div className="text-xl font-bold text-red-600">
      Tiempo: {time}s
    </div>
  );
}

export default Timer;