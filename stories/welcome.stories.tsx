/// <reference path="stories.d.ts"/>
import * as React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import Alert from '../src/alert';

import logoImg from '../assets/logo.png';

const Title = styled.h1`
  color: #212121;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  img {
    height: 2.5em;
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  text-align: center;

  a {
    margin: 10px 5px 20px 0;
    display: inline-block;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

storiesOf('Welcome', module).add('Landing Page', () => (
  <div>
    <Title>
      <img src={logoImg} alt="logo" />
      <br />
      Blazon UI
    </Title>
    <Description>
      Blazon UI is a React component library.
      <br />
      <a href="https://www.npmjs.com/package/blazon-ui">
        <img src="https://img.shields.io/npm/v/blazon-ui.svg?color=%23304FFE" />
      </a>
      <a href="https://www.github.com/zachpwr/blazon-ui">
        <img src="https://img.shields.io/badge/Github-zachpwr%2Fblazon--ui-3D5AFE.svg" />
      </a>
      <a href="https://bundlephobia.com/result?p=blazon-ui">
        <img src="https://img.shields.io/bundlephobia/minzip/blazon-ui.svg?color=%238C9EFF" />
      </a>
    </Description>
    <Alert color="secondary">
      <div style={{ textAlign: 'center' }}>
        <b>👋🏻 Welcome!</b> Use the sidebar on the left to view Blazon UI components.
      </div>
    </Alert>
  </div>
));
