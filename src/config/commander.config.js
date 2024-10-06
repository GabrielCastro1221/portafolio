const { Command } = require("commander");
const program = new Command();

program
  .option("--mode <mode>", "Environment mode", "development")
  .option("-p, --port <port>", "Server port", process.env.PORT || 8080);

program.parse(process.argv);

module.exports = program;
