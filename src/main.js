import { Game } from './core/Game.js';

const canvas = document.getElementById('game-canvas');

const game = new Game(canvas);

window.game = game;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('Clonhero loaded successfully!');
  });
}
