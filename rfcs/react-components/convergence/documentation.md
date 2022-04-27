# RFC: SSR Context

@spmonahan

## Summary

We write extensive amounts of documentation for Fluent UI v9 but it is not organized in a consistent, discoverable way. This lack of organization makes it difficult for developers familiar with the repo to find relevant information and challenging for newcomers to know where to start. This RFC proposes how we structure our existing documentation to make it more effective for both users and contributors. This will not propose any new types of documentation.

## Problem statement

There is no clear guidance on what information belongs in the Fluent UI Github wiki vs what documentation belongs in the Fluent docs site vs what belongs in a readme. Many aspects of Fluent are well-documented in writing but it is not clear where to find information. Additionally, the structure of the wiki mixes different versions of the library at different levels of the documentation making it difficult to explore the wiki with a consistent narrative. As a result it's often easier for both users and contributors to simply ask a question in a Teams support channel to find the information they need. This takes time away from the core team that is better spent responding to concerns that are not covered in documentation.

Storybook carries much of the documentation burden. It does a fairly good job but it is poor at providing guidance on documentation structure so lots of documentation lives within it.

## Detailed Design or Proposal

Fluent UI technical documentation has two primary audiences:

1. **users**, the people who build applications with Fluent
2. **contributors**, the people who build Fluent itself

Each audience has different needs when using documentation so we should first organize our documentation by audience. Users are interested "how to" examples and API references. Contributors are interested in project architecture diagrams and how to submit pull requests. There is overlap in audience interest: both groups will want to know about browser support levels and contributors will also be interested in API references.

[The Divio documentation structure](https://documentation.divio.com/introduction/) breaks documentation into four categories where each category has one job that is distinct from all other categories:

1. **Reference Guides**: e.g., API docs, Storybook examples
2. **How-To Guides**: e.g., Migration guides, How to configure SSR
3. **Explanation**: e.g., Why the Slots API?, architectural diagrams, hooks decomposition
4. **Tutorials**: e.g., How to create a new component, How to use Fluent in a Next.js app

The Divio structure neatly splits up documentation and provides clarity for the author in what they should write and the tone they should use, and for the reader in what they can expect to glean from a particular document. The [Divio site](https://documentation.divio.com/introduction/) succinctly describes the details of each documentation category so it will not be summarized here.

These two organizational principles lead to:

1. The Fluent UI documentation will primarily target the user audience. When in doubt about the primary audience for a piece of documentation prefer placing it with user-facing documentation.

2. The documentation for each audience will be organized according to the Divio documentation structure.

3. Prefer linking to existing documentation rather than duplicating it.

This proposal is strictly about refinining and organizing the existing Fluent UI documentation and does not propose any new types of documentation be written.

While this RFC proposes organization and outcomes it does not cover the specific details needed to arrive at these outcomes. Should this RFC be accepted it will be followed up with Github Issues to track the necessary work.

### Organization

Fluent UI documentation will be sorted into User Documentation and Contributor Documentation each targeting the needs of the user and contributor audiences respectively.

#### User Documentation

User documentation will be quickly and easily accessible. It must be easy to point a user to the right place with a link to a page or a deep link to a specific section of a page (e.g., example.com/docs/my-component#section-of-interest). While a user may clone the Fluent UI repository and run documentation tools locally all user documentation should be accessible from the web and never require users to run or install code locally.

[Storybook](https://storybook.js.org/) is the home for [Fluent UI v9 User Documentation](https://aka.ms/fluentui-storybook). A versatile tool, Storybook allows authors to automatically generate API documentation from Typescript types and write examples to demonstrate different component configurations and behaviors.

1. The hierarchy of Storybook will be revised from [its existing structure](https://aka.ms/fluentui-storybook).
   1. All existing content will be kept, just reorganized.
   2. The new structure will be:
      1. Guide
         1. Introduction
         1. Quick Start/Getting Started
         1. How To
            1. Upgrade
               1. The `Migrations` section will be moved to this How to Upgrade section
               2. Individual component migration guides will be moved from component packages to here
            2. All the content from the existing `Concepts > Developer` section except `Icons`
      1. Theme
      1. Components
      1. Icons
      1. Preview Components
1. We will write Storybook stories to demonstrate all component configurations and behaviors.
   1. A story will demonstrate a single configuration or behavior to highlight the feature being demonstrated.
   2. Within reason. Complex components may have some many configurations that this approach becomes burdensome.
1. All public APIs like component Typescript types will have [TSDoc comments](https://tsdoc.org/) documenting the API.
1. All component migration guides will live in a "How To Upgrade" section in Storybook.
   1. [An upgrade section](https://61b7c406fa7cd4003a8a07ec-tfmcclkdkx.chromatic.com/?path=/docs/concepts-upgrading-from-v8-overview--page) already exists so it will be reorganzied to `How To > Upgrade` per the Divio structure.

#### Contributor Documentation

Contributor documentation will live as closely to the relevant code as possible. Contributors will be able to clone the Fluent UI repository and have all the information they need to start coding (user documentation will all be runnable locally). Once the repo has been cloned an internet connection should not be required to hack on Fluent UI.

When writing contributor documentation, favor putting information in the package `README.md` (the "readme") file. By convention this is often the first place contributors look for information and the tools we use, like Github, put the readme front and center even offering quality of life features like formatting when viewing the readme on Github.com.

While the readme is the primary place to put contributor documentation, it is not the only place this category of documentation can live. Other conventions like having a `CODE_OF_CONDUCT.md` to outline the project's code of conduct are quite common and we should follow these conventions to balance the amount of information housed in the readme. One example specific to Fluent is our `Spec.md` files that are written as part of the component development process. These files specify the API and behavior (and more!) of a component and are often quite lengthy and not immediately relevant to a contributor.

While readmes are often the first place a contributor will look for information about a project they are also user-facing documentation. [npm](https://www.npmjs.com), the repository from which Fluent is installed displays the [package readme on its package homepage](https://www.npmjs.com/package/@fluentui/react) so this may be the first piece of documentation both users and contributors encounter when using Fluent.

1. The readme will contain relevant information like how to install and import the component and basic usage. It will serve as a sign post to further documentation like the component spec and user documentation.
   1. Example: [SpinButton README](../../../packages/react-spinbutton//README.md)

##### Github Wiki

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
