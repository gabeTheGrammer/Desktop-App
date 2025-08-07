import { useState, useEffect } from "react";

export default function GlisteningBackground() {
    const [height, setHeight] = useState(new Array(10).fill(0));

    useEffect(() => {
        setHeight((arr) => arr.map(() => Math.random() * 100));
    }, [])

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {height.map((_, i) => {
        const size = Math.random() * 60 + 20;
        const top = height[i];
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 3;

        return (
          <div
            key={i}
            className="glisten-circle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
