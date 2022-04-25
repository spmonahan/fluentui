# RFC: SSR Context

@spmonahan

## Summary

We write extensive amounts of documentation for Fluent UI v9 but it is not organized in a consistent, discoverable way. This lack of organization makes it difficult for developers familiar with the repo to find relevant information and challenging for newcomers to know where to start. This RFC proposes how we structure our existing documentation to make it more effective for both users and contributors. This will not propose any new types of documentation.

## Problem statement

There is no clear guidance on what information belongs in the Fluent UI Github wiki vs what documentation belongs in the Fluent docs site vs what belongs in a readme. Many aspects of Fluent are well-documented in writing but it is not clear where to find information. Additionally, the structure of the wiki mixes different versions of the library at different levels of the documentation making it difficult to explore the wiki with a consistent narrative. As a result it's often easier for both users and contributors to simply ask a question in a Teams support channel to find the information they need. This takes time away from the core team that is better spent responding to concerns that are not covered in documentation.

## Detailed Design or Proposal

There are two primary audiences for Fluent UI documentation:

1. **users**, the people who build applications with Fluent
2. **contributors**, the people who build Fluent itself

These audiences are both important but have different needs from documentation, though there are areas where they overlap. In the world of Fluent UI users greatly outnumber contributors and make up most of usage. _Fluent UI documentation should primarily target this audience._ While still very important to the health of Fluent UI documention targeted at contributors is of secondary importance. _Wherever possible we should point contributors at user documentation._

### User Documentation

User documentation should be quickly and easily accessible. It must be easy to point a user to the right place with a link to a page or a deep link to a specific section of a page (e.g., example.com/docs/my-component#section-of-interest). While a user may clone the Fluent UI repository and run documentation tools locally all user documentation should be accessible from the web and never require users to run or install code locally.

When in doubt about where a piece of documentation should live, favor user docs.

Something about Storybook

### Contributor Documentation

Contributor documentation should live as closely to the relevant code as possible. Contributors should be able to clone the Fluent UI repository and have all the information they need to start coding (user documentation should all be runnable locally). Once the repo has been cloned an internet connection should not be required to hack on Fluent UI.

When writing contributor documentation, favor putting information in the package `README.md` (the "readme") file. By convention this is often the first place contributors look for information and the tools we use, like Github, put the readme front and center even offering quality of life features like default formatting when viewing the readme on Github.com.

While the readme is the primary place to put contributor documentation, it is not the only place this category of documentation can live. Other conventions like having a `CODE_OF_CONDUCT.md` to outline the project's code of conduct are quite common and we should follow these conventions to balance the amount of information housed in the readme. One example specific to Fluent is our `Spec.md` files that are written as part of the component development process. These files specify the API and behavior (and more!) of a component and are often quite lengthy and not immediately relevant to a contributor.

_The readme should contain relevant information like how to install and component and basic usage. It should serve as a sign post to further documentation like the component spec and user documentation._

### Github Wiki

The Github Wiki is the documentation place of last resort. It's a poor place for user documentation as it cannot easily host live code like Storybook and Github's tools gear it toward contributors. It's also a poor choice for contributor documentation as it's far away from the source code and it requires an internet connection (technically it can be cloned and viewed offline but that's likely a niche case).

This may make the Github Wiki sound like a bad place for documentation but it's actually quite useful! With a simple, flat hierarchy the wiki is a good place for high level documentation that applies to the entire project. Guidelines for contributors, high level architecture diagrams and links to other documentation (i.e., the user docs) are all good things to put here.

The key with the wiki is to keep is brief and prefer other homes for docs.

- [Typescript Github Wiki](https://github.com/microsoft/TypeScript/wiki)
- [VS Code Github Wiki](https://github.com/microsoft/vscode/wiki)
- Lodash
  - [Github Wiki](https://github.com/lodash/lodash/wiki)
  - [User Documentation](https://lodash.com)

#### Questions

### I'm Writing Some Documentation But Unsure Where it Should Live

When in doubt, favor user documentation for anything you document. This is the largest possible audience and, generally, contributors are also users.

## Glossary

- "the wiki": The Fluent UI Wiki hosted on Github
- "storybook": The Fluent UI public docs site (e.g., the < v9 site)
- "public docs": the same as "storybook"
- "users": people using Fluent UI to build apps who are not contributing code to Fluent UI (e.g., they use Button in their app)
- "contributors": people contributing code to Fluent UI (e.g., they build the Button component). For the purposes of this doc this includes the core team.
- "readme": documentation file that lives with the source code it documents
- "core team": people who work full time on Fluent UI React

## Discarded Solutions

## Open Issues
