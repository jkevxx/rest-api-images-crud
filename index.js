import app from "./app.js";
const PORT = 4000;

import { connectToDB } from "./utils/mongoose.js";

async function main() {
  await connectToDB();

  app.listen(PORT, () => {
    console.log("I'm listening in port", PORT);
  });
}

main();
