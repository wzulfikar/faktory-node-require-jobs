const fs = require("fs");
const path = require("path");
const faktory = require("faktory-worker");

const jobsDir = __dirname;

fs.readdir(jobsDir, (err, files) => {
  files.forEach((file) => {
    if (err) throw new Error(err);
    if (file == "index.js") return;

    // Register job files in current directory
    const job = require(path.join(jobsDir, file));
    faktory.register(job.name, job);

    console.log("- Job registered:", job.name);
  });
});
