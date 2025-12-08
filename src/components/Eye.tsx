import { useEffect, useRef, useState } from 'react';

function Eye() {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  const eyeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) {
        return;
      }

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      const radius = eye.width / 4;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(radius, Math.sqrt(deltaX * deltaX + deltaY * deltaY));

      setPupilPosition({
        x: distance * Math.cos(angle),
        y: distance * Math.sin(angle),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span ref={eyeRef} className="flex h-12 w-12 items-center justify-center rounded-full border-3">
      <span
        className="m-2 inline-block h-3 w-3 rounded-full bg-black"
        style={{ transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)` }}
      ></span>
    </span>
  );
}

export default Eye;
