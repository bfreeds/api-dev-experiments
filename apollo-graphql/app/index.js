// from tutorial by Ian Wilson
// https://medium.freecodecamp.org/learn-to-build-a-graphql-server-with-minimal-effort-fc7fcabe8ebd
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./schema";

// read port from env, default to 3500
const PORT = process.env.PORT || 3500;

// initialize express instance
const app = express();

// instantiate ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

// configure express as Apollo middleware
server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send({
    hello: "there!"
  });
});

// start server
app.listen(PORT, () => `Listening at http://localhost:${PORT}/graphql`);
