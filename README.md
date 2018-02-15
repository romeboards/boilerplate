# Boilerplate


## Architecture

#### Backend
The backend of the app (`/server`) is a simple express build.

#### Frontend
The frontend of the app (`/client`) is built on top of [create-react-app](https://github.com/facebookincubator/create-react-app).

*NOTE:* in order to keep CRA up-to-date, you should instantiate it on your end. See instructions below.

## Setup
Make sure you have [yarn](https://yarnpkg.com/en/)  and then just

```
yarn install
```

to grab dependencies for the server. You'll probably need a `.env` in the root directory for things as they develop.

Create a fresh CRA build as `client`:

```
npx create-react-app client
```

## Running in development
Check `package.json` in the root directory for all options. To run both `express` and `create-react-app` you just need

```
yarn start
```

from root.

## Deploying
Package clientside assets and serverside es6 through

```
yarn build
```

#### Heroku

Assets can be built automagically thru heroku's postbuild hook (see `package.json` for all the options).

Your express app will grab static files (i.e. the react app and assets) from `client/build` automatically.
