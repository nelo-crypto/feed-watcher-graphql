# Feed Watcher GraphQL

## GraphQL (PORT 3002)

### Stack

* TypeScript
* Apollo Server
* Nexus
* GraphQL

### Installation

Make sure you have the `.env` file in the root of the folder with the `API_KEY` set.

```
yarn install
yarn run dev
```

### Overview

This API is implemented as a GraphQL server wrapped around an HTTP API.

This wrapper is realized with Apollo Server and Nexus while using a custom Datasource. There isn't much deviation from standard use of the stack:

* This custom datasource, found at `src/datasource`, extends Apollo's default datasource class, and is loaded into Apollo Server through Context (`src/context.ts`).
* The Nexus Types are located at `src/graphql` and upon editing the object types Nexus will reload GraphQL with the new definitions. 

### Areas to improve

* Make a production build. The app is running at Heroku in "development mode".
* Build a Postman semi-automated test collection. The code is very simple and declarative.
* Add more fields from the harvardartmuseums API. I only added enough to make the demo viable in time. 

### Heroku

This app is live at Heroku (`http://feed-watcher-graphql.herokuapp.com`)

### Running tests

```
yarn test
```