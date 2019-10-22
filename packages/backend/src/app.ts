import express from "express";

async function main() {
  const app = express();
  const port = 3000;

  app.listen(port, () => console.log(`http://localhost:${port}`));
}

main().catch(e => console.error(e));
