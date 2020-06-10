const { promisify } = require("util");
const childProcess = require("child_process");

const exec = promisify(childProcess.exec);

const BRANCH_REGEX = new RegExp("(?<=/)[^-]*-[^-]*");

/**
 * Returns the name of the current branch
 *
 * @returns {string}
 */
const getCurrentBranch = async () => {
  const { stdout } = await exec("git symbolic-ref --short HEAD");

  // trim excess whitespace
  return stdout.trimRight();
};

/**
 * Attempts to parse the issue/ticket # from the branch name.
 * This function assumes the branch name is in the format of:
 * [branch type]/[prefix]-[issue #]
 *
 * @returns {string}
 */
const getIssueNo = async () => {
  try {
    const branchName = await getCurrentBranch();
    const matches = branchName.match(BRANCH_REGEX);

    // matches[0] should be the captured issue #
    return matches && matches[0];
  } catch (e) {
    throw e;
  }
};

/**
 * Constructs & returns a commit message based on data captured from user
 *
 * @param {Object} commitData the captured information about the commit
 * @param {string} commitData.issueNo the commit issue #
 * @param {string} commitData.shortDesc the main commit description
 * @param {string} [commitData.longDesc] additional commit body text
 *
 * @returns {string}
 */
const buildCommitMessage = (commitData) => {
  const { issueNo, shortDesc, longDesc } = commitData;

  return `[${issueNo}] - ${shortDesc} ${longDesc ? `\n * ${longDesc}` : ""}`;
};

/**
 * Executes a commit once a message has been constructed
 *
 * @param {string} message the commit message to use
 * @returns {void}
 */
const writeCommit = async (message) => {
  try {
    await exec(`git commit -m "${message}"`);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getCurrentBranch,
  getIssueNo,
  buildCommitMessage,
  writeCommit,
};
