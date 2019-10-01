# Fullstack Express-React app written in TypeScript

This is a starter kit for a fullstack application configured to use [Express](http://expressjs.com/) in the backend and [React](https://reactjs.org/) in the frontend, all written in [TypeScript](https://www.typescriptlang.org/). The backend is built with [webpack](https://webpack.js.org/) (configuration inspired from [api-skel](https://github.com/anthillsolutions/api-skel)) and bootstrapped with [create-mern-ts-app](https://github.com/Fabianopb/create-mern-ts-app). The frontend was bootstraped with [create-react-app](https://github.com/facebook/create-react-app).

This starter kit may be configured to use [Jest](https://jestjs.io/) testing framework in the future.
This starter kit may be configured to use environment variables for environment agnostic behavior in the future.

## Environment Requirements

Must have the following binaries installed:
```
[node](https://nodejs.org/en/download/) version 8+
npm version 5+
```

## Running it locally

Install dependencies:
```
$ npm install
```

Launch the application:
```
$ npm run dev
```

## Creating API endpoints

The backend is structured by routes. Initially we have `items` and inside of each we may have the respective `model`, `controller`, and `tests`.

Say you want to create an endpoint to manage items. you can then create the following structure under the `server/src/item` folder:
```
server/src/item/
│── item.model.ts
│── item.controller.ts
└── item.test.ts
```

The `controller` consists of your endpoints, where you define what actions your user will be able to perform, like creating, reading, updating, and deleting entries.

## Testing the backend

TODO write testing guidance here.

## License

MIT
