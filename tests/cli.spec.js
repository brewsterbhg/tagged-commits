const test = require("ava");
const inquirer = require("inquirer");
const cli = require("../lib/cli");
const commit = require("../lib/commit");

const fixture = {
  test: "test",
};

test("getCommitInfo", async (t) => {
  inquirer.prompt = () => Promise.resolve(fixture);
  commit.getIssueNo = () => Promise.resolve("test");

  const expected = fixture;
  const actual = await cli.getCommitInfo();

  t.is(actual, expected);
});

test("confirmCommit", (t) => {
  inquirer.prompt = () => fixture;

  const expected = fixture;
  const actual = cli.confirmCommit();

  t.is(actual, expected);
});
