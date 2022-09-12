const faktory = require("faktory-worker");

(async () => {
  const client = await faktory.connect();
  await client
    .job("ResizeImage", { id: new Date().getTime(), size: "thumb" })
    .push();
  await client.close(); // reuse client if possible! remember to disconnect!
})().catch((e) => console.error(e));
