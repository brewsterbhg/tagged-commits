const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const cli = require("./lib/cli");
const commit = require("./lib/commit");

clear();

console.log(
  chalk.magenta(
    figlet.textSync("tagged-commits", {
      font: "slant",
    }),
    "\n"
  )
);

/**
 * Start the application
 *
 * @returns {void}
 */
const run = async () => {
  try {
    const commitData = await cli.getCommitInfo();
    const commitMessage = commit.buildCommitMessage(commitData);

    console.log(chalk.green(`\n ${commitMessage} \n`));

    const { confirmed } = await cli.confirmCommit();

    if (confirmed) {
      commit.writeCommit(commitMessage);
    }
  } catch (e) {
    throw e;
  }
};

run();
