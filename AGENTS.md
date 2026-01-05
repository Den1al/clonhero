# AGENTS.md

## Project Overview

Clonhero is a browser-based 3D roguelike shooter inspired by Archero. Players navigate procedurally generated rooms, defeat waves of enemies, collect XP to level up, and choose abilities to build powerful synergies across three stages of escalating difficulty.

## Tech Stack

- **Three.js** - 3D rendering engine
- **Vite** - Build tool and dev server
- **Howler.js** - Audio management
- **Vitest** - Unit testing

## Project Structure

```
src/
├── core/           # Game loop, scene, input, audio
│   ├── Game.js     # Main game state machine and update loop
│   ├── Scene.js    # Three.js renderer, camera, lighting
│   ├── Input.js    # Keyboard and touch input handling
│   └── Audio.js    # Music and sound effects
├── entities/       # Game objects
│   ├── Player.js   # Player stats, abilities, and rendering
│   ├── Enemy.js    # Enemy types and behaviors
│   ├── Projectile.js   # Projectile mechanics (pierce, ricochet, homing)
│   ├── XPGem.js    # Experience drops
│   ├── HealthPotion.js # Health pickups
│   ├── Particle.js # Visual effects
│   ├── Arena.js    # Level boundaries and obstacles
│   └── RoomGate.js # Exit portal between rooms
├── systems/        # Game mechanics
│   ├── AbilitySystem.js    # 33 abilities across 5 categories
│   ├── WaveSystem.js       # Room/wave generation and difficulty
│   ├── CollisionSystem.js  # Hit detection and resolution
│   └── StatusEffectSystem.js   # Burn, freeze, poison effects
├── ui/             # User interface
│   └── UI.js       # HUD, menus, ability selection, damage numbers
├── utils/          # Helpers
│   ├── MathUtils.js        # Distance, random utilities
│   ├── ObjectPool.js       # Projectile pooling for performance
│   └── ScoreboardManager.js    # Local storage run tracking
└── __tests__/      # Unit tests
```

## Game States

The game operates as a state machine with these states:
- `MENU` - Start screen
- `PLAYING` - Active gameplay
- `PAUSED` - Pause menu open
- `LEVELUP` - Ability selection screen
- `ROOM_TRANSITION` - Moving between rooms
- `REWARD_WHEEL` - Bonus selection after clearing a room
- `GAMEOVER` - Death screen
- `VICTORY` - Win screen after completing all stages

## Key Systems

### Ability System
33 abilities in 5 categories: Attack, Defense, Utility, Special, Elemental. Abilities stack with max limits. Elemental upgrades require base element first.

### Wave System
3 stages with increasing difficulty:
1. Void Station (10 rooms, 1.0x)
2. Neural Network (12 rooms, 1.3x)
3. Core Systems (15 rooms, 1.6x)

Boss rooms every 5 rooms. 2-4 waves per normal room.

### Enemy Types
- **Chaser** - Melee rush
- **Shooter** - Ranged attacks
- **Bomber** - Explodes on death
- **Spawner** - Creates chasers
- **Tank** - High HP, slow
- **Boss** - Multi-phase with minions

### Status Effects
- **Burn** - DoT, stackable 5x
- **Freeze** - Slow, stackable 3x (max 80% slow)
- **Poison** - DoT, stackable 5x

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (port 3000)
npm run build      # Production build
npm run test       # Run unit tests
```

## Testing

### Unit Tests
Run with `npm run test`. Tests are located in `src/__tests__/`.

### E2E / Integration Testing
Use the Playwright MCP server for browser-based testing. Before running Playwright tests:

1. Start the dev server: `npm run dev`
2. The game will be available at `http://localhost:3000/clonhero/`
3. Use Playwright MCP tools to navigate, interact, and verify game behavior

Key test scenarios:
- Menu navigation and game start
- Player movement and attacking
- Ability selection on level up
- Pause/resume functionality
- Game over and restart flow

## Key Files for Common Tasks

| Task | Files |
|------|-------|
| Add new ability | `src/systems/AbilitySystem.js`, `src/entities/Player.js` |
| Add enemy type | `src/entities/Enemy.js`, `src/systems/WaveSystem.js` |
| Modify UI | `src/ui/UI.js`, `index.html`, `styles.css` |
| Add sound | `src/core/Audio.js`, add file to `assets/sounds/` |
| Adjust difficulty | `src/systems/WaveSystem.js` |
| Add status effect | `src/systems/StatusEffectSystem.js` |

## Configuration

- **Vite config**: `vite.config.js` - Base path `/clonhero/`
- **Arena size**: 20x20 units (defined in `Arena.js`)
- **Player base stats**: Defined at top of `Player.js`
- **Enemy stats**: `ENEMY_TYPES` object in `Enemy.js`
