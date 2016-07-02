# FOSTER.TS
###### A simple WebGL + TypeScript Game framework with a Scene -> Entity -> Component model.

★ **still very work in progress** ★

and am only working on this in my spare time!

#### Goals
 - Lightweight framework to be easily used for GameJam games
 - Foster should run in the browser and in electron without any changes on the game-side
 - ES6 all the way. Not my goal to be backwards / ES5 compatible as this is to be primarily used in Electron
 - Scene -> Entity -> Component structure
 - Frame-based animation, with atlas loading (Aseprite, Texture Packer, etc)
 - AABB Collision system, with simple Physics component to handle motion / collision
 
#### Builds
 - [foster.js](https://raw.githubusercontent.com/Drazzke/foster/master/bin/foster.js) : compiled JS file
 - [foster.d.ts](https://raw.githubusercontent.com/Drazzke/foster/master/bin/foster.d.ts) : typescript definition file to reference from your game (ex. `/// <reference path="foster.d.ts"/>`)

#### Sample Games
 - [sample_game](https://github.com/Drazzke/foster/tree/master/sample_game) - [online demo](http://noelfb.com/foster/sample_game/)

#### [MIT License](https://github.com/Drazzke/foster/blob/master/license.md)
