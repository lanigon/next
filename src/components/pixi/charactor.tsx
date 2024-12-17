// components/Character.tsx

import React, { useState, useEffect } from 'react';
import { AnimatedSprite } from '@pixi/react';
import * as PIXI from 'pixi.js';

interface CharacterProps {
  x: number;
  y: number;
  onMove: (x: number, y: number) => void;
}

const Character: React.FC<CharacterProps> = ({ x, y, onMove }) => {
  const [textures, setTextures] = useState<PIXI.Texture[]>([]);

  // useEffect(() => {
  //   const loader = new PIXI.Loader();
  //   loader.add('walk', '/assets/character_walk.json'); // Sprite Sheet 的 JSON 文件
  //   loader.load((loader, resources) => {
  //     if (resources.walk?.spritesheet) {
  //       const walkTextures = resources.walk.spritesheet.animations['walk'];
  //       setTextures(walkTextures);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let newX = x;
      let newY = y;
      const speed = 5;

      switch (e.key) {
        case 'ArrowUp':
          newY -= speed;
          break;
        case 'ArrowDown':
          newY += speed;
          break;
        case 'ArrowLeft':
          newX -= speed;
          break;
        case 'ArrowRight':
          newX += speed;
          break;
        default:
          break;
      }

      // 限制角色移动在酒馆范围内，例如 x: 0-800, y: 0-600
      newX = Math.max(0, Math.min(800, newX));
      newY = Math.max(0, Math.min(600, newY));

      onMove(newX, newY);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [x, y, onMove]);

  if (textures.length === 0) return null;

  return (
    <AnimatedSprite
      textures={textures}
      anchor={0.5}
      x={x}
      y={y}
      animationSpeed={0.1}
      loop
    />
  );
};

export default Character;
