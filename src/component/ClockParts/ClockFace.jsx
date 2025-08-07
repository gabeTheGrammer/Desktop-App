import { useEffect, useState } from "react";

export default function ClockFace() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    })

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = ((hours % 12) + minutes / 60 ) * 30;

    return (
        <div className="w-full h-full aspect-square relative rounded-full border-4 border-white bg-(--text-color) shadow-xl">
      {/* Hour hand */}
      <div
        className="absolute w-[2%] h-[30%] bg-(--bg-color) left-1/2 top-[20%] origin-bottom rounded"
        style={{ transform: `rotate(${hourDeg}deg) translateX(-50%)` }}
      />
      {/* Minute hand */}
      <div
        className="absolute w-[1.5%] h-[40%] bg-(--bg-color) left-1/2 top-[10%] origin-bottom rounded"
        style={{ transform: `rotate(${minuteDeg}deg) translateX(-50%)` }}
      />
      {/* Second hand */}
      <div
        className="absolute w-[1%] h-[50%] bg-(--bg-color) left-1/2 top-0 origin-bottom"
        style={{ transform: `rotate(${secondDeg}deg) translateX(-50%)` }}
      />

      {/* Center dot */}
      <div className="absolute w-[6%] h-[6%] bg-(--bg-color) rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
    </div>
    )
}