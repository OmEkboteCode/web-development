# Git and Github

## What is Git?
Free & Open Source Version Control System(Tools that help to tracks changes in code)

- Track History
- Help to collaborate

## What is Gitgub?
Website where we host Repositories online

## Using Git

- Command Line
- IDE/Code Editors(like VSCode)
- Graphical User Interface(like GitKraken)

## Configuring Git

git config --global user.name "My Name"
git config --global user.email "@email.com"


## Basic Commands

- Clone: Cloning a repo on our local machine    git clone <somelink>
- status: displays the state of the code   git status

- add: adds new or changed files in your working directory to the Git staging area  git add
- commit: it is the record of change
git commit -m "some message"
- push: upload local repo content to remote repo

- init: used to create a new git repo  git init

git remote add origin <link> (repo link)
git remote -v  (to verify remote)
git branch (to check branch)
git git branch -M main (to rename branch)
git push -u origin main(setting upstream) -> git push

## Branches

- git branch (check)
- git branch -M main (rename)
- git checkout <branch name> (to navigate)
- git checkout -b <new branch name> (to create new branch)
- git branch -d <name> (delete branch)

## Merging Code

1. git diff <branch name> (to compare commits, branches, files and more)
git merge <branch name> (to merge 2 branches)

OR

2. create a PR

pull request: It lets you tell others about changes you've pushed to a branch in a repository on GitHub. 1 commit

## Pull command
git pull origin main

used to fetch and download content from a remote repo and immediately update the local repo to match that content.

## Merge Conflicts 
An event that takes place when Git is unable to automatically resolve differences in code betwen two commits

- <i>Keep what you want and remove any other OR keep both. VScode has all the features neccessary</i>

## Fixing Mistakes

git log (all commits in reverse chronological order. Hash is displayed here)

- Case 1: Staged Changes   git reset <file name>   git reset

- Case 2: Commited changes(for one commit)  git reset HEAD~1

- Case 3: Commited changes(for many commits) git reset <commit hash>   git reset --hard <commit hash> (To remove delete commit from both git and vscode)

## What is forking?
A fork is a new repo that shares code and visiblity settings with the original "upstream" repository.
Fork is a rough copy.