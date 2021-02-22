// import { ApolloServer } from "apollo-server";
import { ApolloServer } from "apollo-server-express";
import express, { NextFunction, Request, Response } from "express";
import { context, resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";

const server = new ApolloServer({ typeDefs, resolvers, context });
// const server = new ApolloServer({ typeDefs, resolvers, context, mocks });

const app = express();

app.use(express.json()); // This works as same as bodyParser.json() does.
app.use("/graphql", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.query);
  console.log(req.body.variables);
  return next();
});

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

server.applyMiddleware({ app });

const port = 4000;
app.listen({ port }, () => {
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});
