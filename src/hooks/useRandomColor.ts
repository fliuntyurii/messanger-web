import { useState, useLayoutEffect } from 'react';

export function useRandomColor() {
  const [color, setColor] = useState<string>('0, 0, 0');

  useLayoutEffect(() => {
    const x = Math.random() < 0.5 ? 100 : 200;
    const y = Math.random() < 0.5 ? 100 : 200;
    const z = Math.random() < 0.5 ? 100 : 200;

    setColor(`${x}, ${y}, ${z}`);
  }, []);

  return color;
}