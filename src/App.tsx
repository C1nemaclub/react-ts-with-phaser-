import { useState, useRef, useEffect } from 'react';
import gameConfig from './game';
import './App.css';
import { useGame } from './hooks';
import { BootScene } from './game/scenes';

function App() {
  const parentEl = useRef<HTMLDivElement>(null);

  const game = useGame(parentEl, gameConfig);
  const [bootScene, setBootScene] = useState<BootScene | null>(null);

  useEffect(() => {
    if (game) {
      const bootScene = game.scene.keys.BootScene as BootScene;
      setBootScene(bootScene);
    }
  }, [game]);

  function changeText() {
    bootScene?.changeText("Hello from React");
  }

  return (
    <>
      <div ref={parentEl} className='gameContainer' />
      <button onClick={changeText}>Change Text</button>
    </>
  );
}

export default App;
