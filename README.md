### Puppy Components Again

- sample boilerplate for using React with Rollup

[![Build Status](https://travis-ci.org/dankreiger/puppy-components-woof.svg?branch=master)](https://travis-ci.org/dankreiger/puppy-components-woof)

## [Component Playground](https://dankreiger.github.io/puppy-components-woof/)

## Usage

1. Install (yarn or npm)

   Yarn:

   ```sh
   $ yarn add puppy-components-woof
   ```

   NPM:

   ```sh
   $ npm install puppy-components-woof
   ```

2. Import the component(s) you want to use. Visit the [playground](https://dankreiger.github.io/puppy-components-woof/) for usage examples and component docs.

---

## Developing

To start the developing run :

```
> npm run dev
```

## Testing

Testing is done with [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) and [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)

```
> npm run test
```

or (for getting coverage)

```
> npm run test:coverage
```

## Linting

Linting is set up through [ESLint](https://eslint.org/) and configured with [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
You can modify linting rules by overriding them in the `.eslintrc.json` file.

```
> npm run lint
```

or (for for automatic fixing if possible)

```
> npm run lint:fix
```

## Publishing

```
> npm run release
```

#### Deploy the Styleguide to GitHub Pages

Make sure the repository url in `package.json` file is set to your repoitory url, then:

```
> npm run deploy
```

## Scripts

- `npm run dev` : Executes the develop mode, running watcher and the Stylguide, rebuilding your library on every change.
- `npm run start` : Only serves the Styleguide.
- `npm run build` : Builds your library (build can be faound in `dist` folder).
- `npm run styleguide:build` : Builds the static Styleguide in case you want to deploy it.
- `npm run test` : Runs the tests.
- `npm run test:coverage`: Runs the test and shows the coverage.
- `npm run lint` : Runs the linter.
- `npm run lint:fix` : Runs the linter and fixes automatic fixable issues.
- `npm run release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `npm run deploy`: Deploys the Styleguide to GitHub Pages.

## Resources

### Bundler

- [Rollup.js](https://rollupjs.org/guide/en)

### Styleguide

- [React Styleguidist](https://react-styleguidist.js.org/)

### Testing

- [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

### Linting

- [ESLint](https://eslint.org/)

### Compiler

- [Babel 7](https://babeljs.io/)
