
import { useState } from "react";

function WebBackground() {
  const [position, setPosition] = useState({ x: 200, y: 200 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 400,
      y: ((event.clientY - rect.top) / rect.height) * 400
    });
  }

  return (
    <div className="web-background" onMouseMove={handleMouseMove}>
      <svg viewBox="0 0 400 400" className="web-svg">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const radian = (angle * Math.PI) / 180;

          return (
            <line
              key={angle}
              x1={position.x}
              y1={position.y}
              x2={position.x + 250 * Math.cos(radian)}
              y2={position.y + 250 * Math.sin(radian)}
              stroke="#e63975"
              strokeWidth="1"
            />
          );
        })}

        {[40, 80, 120, 160].map((radius) => (
          <circle
            key={radius}
            cx={position.x}
            cy={position.y}
            r={radius}
            fill="none"
            stroke="#8a4cff"
            strokeWidth="1"
          />
        ))}

        <circle
          cx={position.x}
          cy={position.y}
          r="8"
          fill="#ff477e"
        />
      </svg>
    </div>
  );
}

export default WebBackground;
