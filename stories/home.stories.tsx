/// <reference path="stories.d.ts"/>
import { linkTo } from '@storybook/addon-links';
import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/button';
import Pill from '../src/pill';

import logoImg from '../assets/logo.png';

import StoryColumn from './storyColumn';

storiesOf('Navigation|Home', module)
  .add('Welcome', () => (
    <StoryColumn>
      <img src={logoImg} style={{ width: 32 }} />
      <h1>
        Blazon UI{' '}
        <sup>
          <Pill color="warning">beta</Pill>
        </sup>
      </h1>
      <p>Blazon UI is a React component library.</p>
      <p>
        <a href="https://www.npmjs.com/package/blazon-ui">
          <img src="https://img.shields.io/npm/v/blazon-ui.svg?color=%23304FFE" />
        </a>{' '}
        <a href="https://www.github.com/zachpwr/blazon-ui">
          <img src="https://img.shields.io/badge/Github-zachpwr%2Fblazon--ui-3D5AFE.svg" />
        </a>{' '}
        <a href="https://bundlephobia.com/result?p=blazon-ui">
          <img src="https://img.shields.io/bundlephobia/minzip/blazon-ui.svg?color=%238C9EFF" />
        </a>
      </p>
      <hr />
      <p>
        <Button
          onClick={linkTo('Navigation|Getting Started', 'Installing Blazon UI')}
          title="Get Started with Blazon UI"
        >
          💪🏻 Get Started →
        </Button>
        <Button
          color="secondary"
          onClick={linkTo('Navigation|Home', 'About Blazon UI')}
          title="Learn More about Blazon UI"
        >
          ℹ️ Learn More
        </Button>
      </p>
    </StoryColumn>
  ))
  .add('About Blazon UI', () => (
    <StoryColumn>
      <img src={logoImg} style={{ width: 32 }} />
      <h1>About Blazon UI</h1>
      <p>
        <b>Blazon UI</b> is an open source React component library written in Typescript. It provides a comprehensive
        set of styled components for creating colorful, responsive, a11y-friendly user interfaces.
      </p>
      <p>
        Blazon UI was created in 2019 by <a href="https://www.zachpwr.com">Zach Power</a>, a software engineer @
        Optimizely, Inc. in San Francisco, CA.
      </p>
      <p>
        <Button
          onClick={linkTo('Navigation|Getting Started', 'Installing Blazon UI')}
          title="Install Blazon UI to your app"
        >
          📲 Install Blazon UI →
        </Button>
      </p>
    </StoryColumn>
  ));
