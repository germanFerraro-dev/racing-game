import React from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import { Physics } from '@react-three/cannon';
import './index.css';


createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <Physics
        broadphase='SAP'
        gravity={[0, -2.6, 0]}
      >
        <Scene />
      </Physics>
    </Canvas>
    <div className="controls">
      <p>w, a , s, d : move</p>
      <p>k : camera</p>
      <p>r : reset</p>
      <p>arrows:  flip</p>
    </div>
  </>
);