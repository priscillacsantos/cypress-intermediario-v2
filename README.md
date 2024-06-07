# Automated Testing with Cypress - Intermediate

Repository of basics tests in Cypress, in a Docker image, with API test learning.


## Pre-requirements

It is required to have Node.js and npm installed to run this project.

I used versions  `v20.11.1` and `10.2.4` of Node.js and npm, respectively.

For git, I'm using version: `2.45.1`.

Cypress version: `12.0.2` [From the project root, run the command `npm i @faker-js/faker@7.6.0 cypress@12.0.2 cypress-plugin-api@2.6.1 -D`]. This command will install Cypress and other libs as development dependencies.

> The faker lib will be used to create random data for testing.

> And the cypress-plugin-api lib will be used to provide visual feedback during API testing.

It is also necessary to install docker. Version used in this project: `26.1.3`.

The docker image used is this one: `yrzr/gitlab-ce-arm64v8`.

 Run the `docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce` command and wait for the environment to initialize.


## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.


## Tests

Run `npm run test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.


