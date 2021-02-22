# GraphQL Mock Server

## Getting started
```
npm init -y

npm install apollo-server graphql
npm install @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-resolvers graphql-toolkit --save-dev
npm install @graphql-codegen/introspection --save-dev

npm install typescript ts-node --save-dev
npx tsc --init
```

## Run the server
```
npm run mock-server
```

## Create GraphQL schema
```
npx graphql-codegen init
? What type of application are you building? Backend - API or server
? Where is your schema?: (path or url) http://localhost:4000
? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Resolvers (strongly typed resolve functions)
? Where to write the output: src/generated/graphql.ts
? Do you want to generate an introspection file? Yes
? How to name the config file? codegen.yml
? What script in package.json should run the codegen? gql-codegen
```