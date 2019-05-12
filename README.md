# :shield: Blazon UI

Blazon UI is a React component library.

[![npm version](https://img.shields.io/npm/v/blazon-ui.svg)](https://www.npmjs.com/package/blazon-ui)
[![github repo](https://img.shields.io/badge/Github-zachpwr%2Fblazon--ui-salmon.svg)](https://www.github.com/zachpwr/blazon-ui)

## Usage

To use Blazon UI, simply add it as a dependency to your JavaScript project using NPM or Yarn.

```bash
yarn add blazon-ui
```

Once added, you can begin using Blazon UI React components in your application. Please note that Blazon UI components require a theme provider to be present in your component tree. To include this in your application, add the `<ThemeProvider>` component to your entry point:

```javascript
// Import the theme provider from Blazon UI
import { ThemeProvider } from 'blazon-ui';

// Wrap your application in the theme provider
<ThemeProvider>...</ThemeProvider>;
```

Additionally, if you would like to use the default global style, make sure to add the `<GlobalStyle />` component somewhere in your component tree.

```javascript
// Import the global style from Blazon UI
import { GlobalStyle } from 'blazon-ui';

// Instantiate the component somewhere in the root of your application
<GlobalStyle />;
```

## Developing Locally

To set up Blazon UI locally, run the following commands. This will give you the
necesary packages to run the build process and use Storybook.

```bash
git clone git@github.com:zachpwr/blazon-ui.git
cd blazon-ui
yarn
```

### Storybook Development

Storybook should be used when creating or updating components for Blazon UI. Running the following command will start Storybook and will watch for new code changes as you work.

```bash
yarn storybook
```

When adding new components, be sure to add a new story to Storybook using the file format `stories/<COMPONENT_NAME>.stories.tsx`.

### Linked Development

If you're developing for Blazon UI and would like to test local changes from a consumer, you can link your local Blazon UI repository to another project. To do this, you will have to ensure that new changes have been built.

**From your local Blazon UI directory:**

```bash
yarn build:watch
yarn link
```

**From your local consumer:**

```bash
yarn link blazon-ui
```

Once this link is established, your consumer will import from your local Blazon UI repository rather than NPM. If you are finished, you may unlink Blazon UI.

**From your local consumer:**

```bash
yarn unlink blazon-ui
```

**From your local Blazon UI directory:**

```bash
yarn unlink
```

### Running Unit Tests

Blazon UI uses [Jest](https://jestjs.io/en/) and [Enzyme](https://airbnb.io/enzyme/) to test components. To run all test suites once, run the following in your terminal:

```bash
yarn test
```

If you are developing or debugging unit test failures, it may be useful to watch source files and re-run tests when changes are detected. To do this, run the following in your terminal:

```bash
yarn test:watch
```
