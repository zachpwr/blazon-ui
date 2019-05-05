# :shield: Shield UI

Shield UI is a React component library.

[![npm version](https://img.shields.io/npm/v/shield-ui.svg)](https://www.npmjs.com/package/shield-ui)

## Usage

To use Shield UI, simply add it as a dependency to your JavaScript project using NPM or Yarn.

```bash
yarn add shield-ui
```

Once added, you can begin using Shield UI React components in your application. Please note that Shield UI components require a theme provider to be present in your component tree. To include this in your application, add the `<ThemeProvider>` component to your entry point:

```javascript
// Import the theme provider from Shield UI
import { ThemeProvider } from 'sheild-ui';

// Wrap your application in the theme provider
<ThemeProvider>
  ...
</ThemeProvider>
```

Additionally, if you would like to use the default global style, make sure to add the `<GlobalStyle />` component somewhere in your component tree.

```javascript
// Import the global style from Shield UI
import { GlobalStyle } from 'sheild-ui';

// Instantiate the component somewhere in the root of your application
<GlobalStyle />
```

## Developing Locally

To set up Shield UI locally, run the following commands. This will give you the
necesary packages to run the build process and use Storybook.

```bash
git clone git@github.com:zachpwr/shield-ui.git
cd shield-ui
yarn
```

### Storybook Development

Storybook should be used when creating or updating components for Shield UI. Running the following command will start Storybook and will watch for new code changes as you work.

```bash
yarn storybook
```

When adding new components, be sure to add a new story to Storybook using the file format `stories/<COMPONENT_NAME>.stories.tsx`.

### Linked Development

If you're developing for Shield UI and would like to test local changes from a consumer, you can link your local Shield UI repository to another project. To do this, you will have to ensure that new changes have been built.

**From your local Shield UI directory:**
```bash
yarn build:watch
yarn link
```

**From your local consumer:**
```bash
yarn link shield-ui
```

Once this link is established, your consumer will import from your local Shield UI repository rather than NPM. If you are finished, you may unlink Shield UI.

**From your local consumer:**
```bash
yarn unlink shield-ui
```

**From your local Shield UI directory:**
```bash
yarn unlink
```
