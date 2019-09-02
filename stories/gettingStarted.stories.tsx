import { linkTo } from '@storybook/addon-links';
import * as React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import logoImg from '../assets/logo.png';

import Button from '../src/button';

const StoryColumn = styled.div`
  padding: 10% 20%;

  code {
    font-family: monospace;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: block;
  }

  p code {
    display: inline-block;
    padding: 2px;
    margin: -2px 0;
  }
`;

storiesOf('Navigation|Getting Started', module)
  .add('Installing Blazon UI', () => (
    <StoryColumn>
      <img src={logoImg} style={{ width: 32 }} />
      <h1>Installing Blazon UI</h1>
      <p>
        If your app uses React, it's super easy to integrate with <b>Blazon UI</b>. Simply add <code>blazon-ui</code> as
        a dependency in your <i>package.json</i> file <a href="https://www.npmjs.com/package/blazon-ui">via NPM</a>.
      </p>
      <code>yarn add blazon-ui</code>
      <p>
        Then, you should be good to start instantiating <b>Blazon UI</b> components in your app.
      </p>
      <p>
        <Button onClick={linkTo('Navigation|Getting Started', 'Using Blazon UI')} title="Start Using Blazon UI">
          👉🏻 Start Using Blazon UI →
        </Button>
      </p>
    </StoryColumn>
  ))
  .add('Using Blazon UI', () => (
    <StoryColumn>
      <img src={logoImg} style={{ width: 32 }} />
      <h1>Using Blazon UI</h1>
      <p>
        Once you've installed <b>Blazon UI</b> to your React app, you'll need to install the <i>Theme Provider</i> and{' '}
        <i>Global Style</i>. Please wrap any part of your component hierarchy containing Blazon UI components with a{' '}
        <code>&lt;ThemeProvider /&gt;</code>. Additionally, include the <code>&lt;GlobalStyle /&gt;</code> at some point
        in your component hierarchy to apply global styles to the page.
      </p>
      <p>
        Below is the recommended setup for using <b>Blazon UI</b>:
      </p>
      <code>
        import &#123; ThemeProvider, GlobalStyle &#125; from 'blazon-ui';
        <br />
        &lt;ThemeProvider&gt;
        <br />
        &nbsp;&nbsp;&lt;GlobalStyle /&gt;
        <br />
        &nbsp;&nbsp;&#123;/* Root of your React app */&#125;
        <br />
        &lt;/ThemeProvider&gt;
      </code>
      <p>
        Now that you've installed the global <b>Blazon UI</b> theme utilities, you can begin using the components listed
        in the "Components" section of these docs within your React app.
      </p>
      <p>
        <Button
          onClick={linkTo('Components|Atoms (Basic)/Alert', 'Default State')}
          title="See Blazon UI Components Now"
        >
          👀 See Components Now →
        </Button>
      </p>
    </StoryColumn>
  ));
