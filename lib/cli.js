const inquirer = require("inquirer");
const commit = require("./commit");

/**
 * Prompt the user for information about the commit
 *
 * @returns {Promise}
 */
const getCommitInfo = async () => {
  return inquirer.prompt([
    {
      name: "issueNo",
      type: "input",
      message: "Enter the issue/ticket #:",
      default: await commit.getIssueNo(),
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a valid issue/ticket #.";
        }
      },
    },
    {
      name: "shortDesc",
      type: "input",
      message: "Please write a short description of the commit:",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter";
        }
      },
    },
    {
      name: "longDesc",
      type: "input",
      message:
        "Provide a longer description of the change: (press enter to skip)",
    },
  ]);
};

/**
 * Prompts user for confirmation on whether to commit the generated message
 *
 */
const confirmCommit = () => {
  return inquirer.prompt([
    {
      name: "confirmed",
      type: "confirm",
      message: "Use this commit message? (y/n)",
    },
  ]);
};

module.exports = { getCommitInfo, confirmCommit };
