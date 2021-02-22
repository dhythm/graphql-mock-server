# GraphQL Mock Server

## Getting started
### Installation Wizard
```
npm init -y

npm install apollo-server graphql
npm install @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-resolvers graphql-toolkit --save-dev
npm install @graphql-codegen/introspection --save-dev

npm install typescript ts-node --save-dev
npm install ts-node-dev --save-dev
npx tsc --init

# Advanced option for logging HTTP request
npm install express apollo-server-express
```

### Run the server
```
npm run mock-server
```

### Access from cURL
```
curl -X POST -H 'Content-Type: application/json' http://localhost:4000/graphql -d '{"query":"query { books { title } }"}'
```
You have to add the content-type header, otherwise will see 'POST body missing. Did you forget use body-parser middleware?' as error.

### Create GraphQL schema
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