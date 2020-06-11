# tagged-commits [![Build Status](https://travis-ci.com/brewsterbhg/clue-browser.svg?token=3ghiUdVqSppTYxZc79EK&branch=master)](https://travis-ci.com/brewsterbhg/tagged-commits)

🏷️ A CLI tool for generating opinionated commit messages with issue/ticket #'s

## Why?

- Standardize your commits!
- Keep a consistent link between your issue tracking and your work!
- Create more meaningful commit messages!
- No more typing `git commit -m`!

## Install

Install globally to run from the command line or locally to be used as a script in your project:

```sh
npm install -g tagged-commits
```

or

```sh
npm install --save-dev tagged-commits
```

> If you are using **NPM 5.2+** you can use `npx` instead of installing globally:

```sh
npx tc
```

## Usage

Run tagged-commits from the command line by typing `tc`, or add it to a script in your package.json:

```sh
"scripts": {
    "tc": "tc"
}
```

## How It Works

You'll be prompted to answer a few questions about your commit. If you follow a branch naming convention of `[branch type]/[prefix]-[ticket #]` (ex: `feature/TC-42`), it will automatically parse the ticket information for you, otherwise you can add it manually.

[![Generating a commit with tagged-commits](https://github.com/brewsterbhg/tagged-commits/blob/master/meta/screenshots/commit.png?raw=true)](https://github.com/brewsterbhg/tagged-commits/blob/master/meta/screenshots/commit.png?raw=true)

After entering your commit message information, it will display a preview of your commit message. If everything looks good, you can confirm and the code will be committed for you!

## Contributing

If you've noticed a bug or have a feature you'd like to suggest, please feel free to open a [GitHub Issue](https://github.com/brewsterbhg/tagged-commits/issues). If you would like to contribute to the project, feel free to fork this repo, create a new branch & open a pull request.

## Licence

MIT
