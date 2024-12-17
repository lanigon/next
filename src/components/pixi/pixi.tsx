'use client'

import '@/app/globals.css';
import { useMemo } from 'react';

import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text, useTick } from '@pixi/react';
import Character from './charactor';

const stageProps = {
  width: 1200,
  height: 600,
  options: {
    background: 0x1099bb
  },
  className: 'w-full h-full mx-auto',
}
const Background: React.FC = () => {
  return <Sprite image={'/bar.png'} anchor={0.5} x={600} y={300} />;
};
const App = () => {
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png'
  return (
    <Stage {...stageProps}>
      <Background />
      <Sprite image={bunnyUrl} x={300} y={150} anchor={0} rotation={Math.PI / 4} />
      <Sprite image={bunnyUrl} x={500} y={150} />
      <Sprite image={bunnyUrl} x={400} y={200} />
      <Character x={200} y={200} />
      <Container x={200} y={200}>
       
      </Container>
    </Stage>
  );
};

export default App;