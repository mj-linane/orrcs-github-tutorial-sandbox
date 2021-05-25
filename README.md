# GitHub Sandbox For Practicing Collaboration

This is a GitHub sandbox for my programming students. This is not important code and therefore you will practice cloning, committing, and pushing your changes to this repository to practice collaborating on code with others.

## What Is Git?

Git is a type of version controlling for your coding projects. Each project is contained in a "repository".

It allows you to take snapshots of your current project in its current state.

That state acts as a "version history" of your project. This allows you to go back in time to access previous states of your code and to combine your code with others.

## What Is GitHub?

It is cloud storage and collaboration platform for your coding projects. It
helps coordinate git version controlling for yourself and when collaborating with others.

## Setting Up Git and GitHubFor The First Time User

1. If installing on your own machine, you will need to first install
   Git: https://git-scm.com/.
2. Next, go to https://GitHub.com and sign up for an account.

## Instructions for Creating A Project With Version Controlling Git

Open your project on VSCode:

1. Click on the **Source Control** icon in the Activity Bar on the left. The Source Control icon in the Activity Bar on the left will always indicate an overview of how many changes you currently have in your repository. Selecting the icon will show you the details of your current repository changes: **CHANGES**, **STAGED CHANGES** and **MERGE CHANGES**.
2. Clicking each item will show you in detail the textual changes within each file.
3. You can also find indicators of the **status of your repository** in the bottom-left corner of VS Code for: the **current branch**, and the number of **incoming and outgoing commits** of the current branch.

## Commits

A **commit** is a small change in the code that you want to add to the repository. These should be done often.

**Staging** (git add) and **unstaging** (git reset) can be done via contextual actions in the files or by drag-and-drop.

You can type a commit message above the changes and press Ctrl+Enter (macOS: ⌘+Enter) to commit them. If there are any staged changes, only changes will be committed. Otherwise, you'll get a prompt asking you to select what changes you'd like to commit and get the option to change your commit settings.

## Cloning A Repository

If you haven't opened a folder yet, the Source Control view will give you the options to **Open Folder** from your local machine or **Clone Repository**.

If you select **Clone Repository**, you will be asked for the URL of the remote repository (for example on GitHub) and the parent directory under which to put the local repository.

For a GitHub repository, you would find the URL from the GitHub **Code** dialog.

You would then paste that URL into the **Git: Clone** prompt.

## Creating A branch

You can create and checkout branches directly within VS code through the **Git: Create Branch** in the **Command Palette** (Ctrl+Shift+P)/(macOS: ⌘+Shift+P).

## Workflow When Collorating With Others

![img.png](images/img.png)

1. Create a local project and publish it to GitHub for your collaborators. Or clone a GitHub project to your local machine.
2. On your local machine create a new branch. Each team can decide their own workflow for branches. Typically new branches are for specific additional features that will be added to your application.
3. Write your code on your local machine and commit the changes to the new branch.
4. When the feature is complete, submit a pull request for your branch to the main branch.
5. Review the code changes with your teammate(s) and merge the branches.
6. Delete the feature branch that was just merged.
7. Start this process over again with a new branch.
