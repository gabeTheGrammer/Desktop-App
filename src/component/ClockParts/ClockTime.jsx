import { useState, useEffect } from 'react';

export default function ClockTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });


  return (
    <div className="text-">
      <div className="text-xl font-semibold text-(--text-color)">{formattedTime}</div>
    </div>
  );
}