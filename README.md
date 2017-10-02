# Spotify Stranger Things


## Architecture

#### Backend
The backend of the app (`/server`) is a simple express build.

#### Frontend
The frontend of the app (`/client`) is built on top of [create-react-app](https://github.com/facebookincubator/create-react-app). See [`/client/README.md`](https://github.com/JustFixNYC/who-owns-what/blob/master/client/README.md) for all the info you might need.

## Setup
Make sure you have [yarn](https://yarnpkg.com/en/)  and then just

```
yarn install && cd client && yarn install
```

to grab dependencies for both server and client. You'll probably need a `.env` in the root directory for things as they develop.

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
