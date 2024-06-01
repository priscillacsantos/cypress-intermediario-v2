# Automated Testing with Cypress - Basics

Sample project.


## Pre-requirements

It is required to have Node.js and npm installed to run this project.

I used versions  `v16.13.2` and `8.19.4` of Node.js and npm, respectively. I suggest you use the same or later versions.

For git, I'm using version: `2.45.1`.

Cypress version: `12.0.2` [From the project root, run the command npm i @faker-js/faker@7.6.0 cypress@12.0.2 cypress-plugin-api@2.6.1 -D)]. This command will install Cypress and other libs as development dependencies.

> The faker lib will be used to create random data for testing.

> And the cypress-plugin-api lib will be used to provide visual feedback during API testing.

It is also necessary to install docker. Version used in this project: `26.1.3`

## Installation

Run `npm install` (or npm i for the short version) to install the dev dependencies.


## Tests

You can run the tests simulating a desktop or mobile viewport.

### Desktop

Run `npm run test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.



## Support this project
--