# :shield: Shield UI

Shield UI is a React component library.

[![npm version](https://img.shields.io/npm/v/shield-ui.svg)](https://www.npmjs.com/package/shield-ui)

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
