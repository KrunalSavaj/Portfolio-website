'use client'; // Ensure this component is treated as a Client Component
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import the Lottie Player with SSR disabled
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true once the component mounts (client-side)
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Fallback while the component is loading
  }

  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player autoplay loop src={path}></Player>
    </div>
  );
};

export default ShowLottie;