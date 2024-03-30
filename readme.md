# WalletConnect Bundle Compiler 🛠️

This is a simple project that compiles the WalletConnect code into a single IIFE (Immediately Invoked Function Expression) bundle. The output bundle includes all nested dependencies and can be found at `dist/bundle.js`. 📦

Node.js functions are polyfilled for seamless compatibility. 🔄

The included `index.html` file is just for testing locally. Please generate your own API key on the WalletConnect Cloud to test. 🔑

## Pre-requisites

- Node.js >= 20.x.x

## Installation Instructions

1. Run `npm install` to install dependencies.
2. Run `npx rollup -c` to compile the code into a single bundle.

## Contribution Notes

- Please remember to commit the `dist` folder as well.
- **Important**: This repo does not use versioning. The generated and committed bundle will always be the latest bundle. Please ensure it's backward compatible. ⚠️
- Remember not to commit any API keys since this is a public repo. 🚫

Feel free to contribute and make this project even better! 🚀
