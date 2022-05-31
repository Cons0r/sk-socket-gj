# Sveltekit server with socket.io and GameJolt auth

## Setup
1. Add Your game ID and Private key to .env
2. add .env to gitignore

## Deploying
Use `npm run build` to build the server, most hosts use buildpacks that automatically run this.  
Use `npm start` or `node server` to start sveltekit with socket.io  
Use `npm run start:raw` or `node out` to start raw sveltekit without socket.io (for testing)