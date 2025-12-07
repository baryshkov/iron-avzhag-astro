import React, { useState } from 'react';
import './matryoshki.css';

const matryoshki = [
  {
    src: 'matryoshki/1.png',
    alt: 'Matryoshka 1',
    sound: 'matryoshka-1.mp3',
    className: 'matryoshka matryoshka-1',
  },
  {
    src: 'matryoshki/2.png',
    alt: 'Matryoshka 2',
    sound: 'matryoshka-2.mp3',
    className: 'matryoshka matryoshka-2',
  },
  {
    src: 'matryoshki/3.png',
    alt: 'Matryoshka 3',
    sound: 'matryoshka-3.mp3',
    className: 'matryoshka matryoshka-3',
  },
  {
    src: 'matryoshki/4.png',
    alt: 'Matryoshka 4',
    sound: 'matryoshka-4.mp3',
    className: 'matryoshka matryoshka-4',
  },
  {
    src: 'matryoshki/5.png',
    alt: 'Matryoshka 5',
    sound: 'matryoshka-5.mp3',
    className: 'matryoshka matryoshka-5',
  },
];

export default function Matryoshki() {
  const [state, setState] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // const playSound = (filename) => {
  //     setIsPlaying(true);
  //     const audio = new Audio(`/assets/sounds/${filename}`);
  //     audio.play();
  //     audio.onended = () => {
  //         setIsPlaying(false);
  //     };

  const handleNextState = () => {
    if (state < 5) {
      console.log('next state');
      const nextState = state + 1;
      setState(nextState);
      // playSound(`matryoshka-${nextState}.mp3`);
    }
  };

  return (
    <>
      <div className="matryoshki-container">
        <div className="matryoshki-stage" onClick={handleNextState}>
          {state >= 1 && <img {...matryoshki[0]} />}
          {state >= 2 && <img {...matryoshki[1]} />}
          {state >= 3 && <img {...matryoshki[2]} />}
          {state >= 4 && <img {...matryoshki[3]} />}
          {state >= 5 && <img {...matryoshki[4]} />}
        </div>
      </div>
    </>
  );
}
