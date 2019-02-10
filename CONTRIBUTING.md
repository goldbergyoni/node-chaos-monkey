# How to be part of our team

- [How to be part of our team](#how-to-be-part-of-our-team)
  - [Joining our team](#joining-our-team)
  - [Stack](#stack)
  - [Architecture and main components](#architecture-and-main-components)
    - [Glossary](#glossary)
    - [High-level architecture](#high-level-architecture)
  - [How To](#how-to)

## Joining our team

## Stack

Node.js backend, no DB, frontend with React, testing with Jest, Travis for CI, . Simple, isn't it?

## Architecture and main components

### Glossary
**Prank -** some act of damage, like overloading the memory or killing a process. 

**Entry Point -** an input technology to start pranks and get pranks data. For example: API, command line, etc

### High-level architecture

<img src="docs/architecture.png" alt="Architecture" />

## How To
**How do I setup my machine for development?** - simply:
- Git clone https://github.com/i0natan/node-chaos-monkey
- npm i
- npm run start:dev

Consider developing on a dedicated branch

**How do I test my new code?** - until we will add some automated tests, the only alternative is manual testing. Under ~/tests/manual-testing-with-simple-web-app there is a simple Express web application that uses the chaos-monkey. Navigate to this directory, start the app with "npm start" and the chaos-monkey will get hosted in this app. Now you can check your new functionality the way you like, for example by calling the chaos-api



**Wanna add a new prank (type of damage)? -** Go to ~/lib/pranks and copy one of the existing pranks, change the class name and override the "Start" and "Stop" methods with your own logic. Then, visit ~/lib/pranks/pranks-definition.js and add your new prank to the list

