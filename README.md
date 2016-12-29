# [joshthewanderer.com](https://joshthewanderer.com)

Uses [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) for offline support, [gulp](http://gulpjs.com/) for building, linting, and deploying, and [yarn](https://yarnpkg.com) for package management.

ES6 for JavaScript and SASS for styles.

## Getting started

If you don't have [yarn](https://yarnpkg.com) installed already, then first install it with `npm i -g yarn`.

Then `yarn` to install dependencies.

`yarn run serve` to fire things up with [browser-sync](https://browsersync.io/)

## Building

`yarn run build` to build the site in production mode

## Deploys

`yarn run deploy` to build the site in production mode, and then deploy that build. You'll need a `.env` file with the relevant server credentials in order to deploy.