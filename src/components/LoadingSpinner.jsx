import React, { useState, useEffect } from 'react';

export default function LoadingSpinner({ gameLoading }) {
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (gameLoading) {
        count = (count + 1) % 4;
        setLoadingText('Loading' + '.'.repeat(count));
      }
    }, 500);

    return () => clearInterval(interval);
  }, [gameLoading]);

  if (!gameLoading) return null;

  return (
    <div className="flex items-center space-x-4 text-xl font-extralight">
      <p>{loadingText}</p>
    </div>
  );
}
