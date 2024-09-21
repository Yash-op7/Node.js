# 1. The V8 JavaScript Engine
- parses and executes the js code.
- the dom and other web platform APIs (they all makeup runtime env) are provided by the browser 
- JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

# 2. An introduction to the npm package manager
- npm is the standard package manager for Node.js.
- Yarn and pnpm are alternatives to npm cli.
- npm manages downloads of dependencies of your project.

## `npm`
- Used for managing packages, including installing and running scripts defined in your project.
## `npx`
- Primarily used for running packages without needing to install them globally.
example: npx create-react-app my-app


## Commands to install packages:
```cli
$ npm install
$ npm install <package-name>
$ npm install <package-name>@<version>
```
flags:

- --save-dev installs and adds the entry to the package.json file devDependencies
- --no-save installs but does not add the entry to the package.json file dependencies
- --save-optional installs and adds the entry to the package.json file optionalDependencies
- --no-optional will prevent optional dependencies from being installed

## commands for updating
```cli
$ npm update
$ npm update <package-name>
```

## Running Tasks
The package.json file supports a format for specifying command line tasks that can be run by using

For example:
```Shell
npm run <task-name>
and inside package.json:
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
```

## Webpack
Webpack is a module bundler for JavaScript applications. It takes your application’s various modules (JavaScript files, CSS, images, etc.) and bundles them into one or more output files, which can then be served to the browser. 
features:
- code splitting
- loaders: transform files ilke ts to js before bundling
- plugins: for further customization of the build process

# 3. Node.js, the difference between development and production
- no difference in node
- but a few libraries recognize using the NODE_ENV env var and default it to `development`
- In the wildly popular `express` framework, setting the NODE_ENV to production generally ensures that:
    - logging is kept to a minimum, essential level
    - more caching levels take place to optimize performance
- `export NODE_ENV=production`
# 4. Profiling Node.js Applications
- Profiling in Node.js applications refers to the process of analyzing the performance of your application to identify bottlenecks, inefficiencies, and resource usage. 
- It helps you understand where your application spends most of its time, which can guide optimization efforts.