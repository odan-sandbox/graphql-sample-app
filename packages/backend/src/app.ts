import fs from "fs";
import path from "path";

import express from "express";
import logger from "morgan";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "../../../graphql/schema/schema.gql"))
  .toString();

async function main() {
  const app = express();
  const port = 3000;

  app.use(logger("short"));
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers: resolvers as any });
  server.applyMiddleware({ app });

  app.get("/", (_, res) => {
    res.send("ok");
  });

  app.listen(port, () => console.log(`http://localhost:${port}`));
}

main().catch(e => console.error(e));
