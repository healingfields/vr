import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import './App.css';
import Box from './components/Box';
import Controls from './components/Control';
import Panorama from './components/Panorama';


function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Controls />
        <Suspense fallback={null}>
          <Panorama />
        </Suspense>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
