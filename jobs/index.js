const fs = require("fs");
const faktory = require("faktory-worker");

const jobsDir = process.argv[process.argv.indexOf("-r") + 1];

fs.readdir(jobsDir, (err, files) => {
  files.forEach((file) => {
    if (err) throw new Error(err);
    if (file == "index.js") return;

    const job = require(`${jobsDir}/${file}`);
    faktory.register(job.name, job);

    console.log("- Job registered:", job.name);
  });
});
