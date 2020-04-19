import * as React from 'react';

import { storiesOf } from '@storybook/react';

import StoryColumn from './storyColumn';

storiesOf('Components|Atoms (Basic)/Grid', module).add('Default State', () => (
  <StoryColumn>
    <h1>
      <code>{'Grid'}</code> Components
    </h1>
    <h2>
      <code>{'<Grid.Container />'}</code> Component
    </h2>
    <p>
      The <code>{'<Grid.Container />'}</code> component provides a responsive shell to a grid-based layout. Grid row
      components should be placed within this container component. If the prop <code>{'fluid={true}'}</code>
      is used with this component, the container will span the width of its parent. If the prop{' '}
      <code>{'fluid={false}'}</code> is used, the container will have a responsive width and will be centered within its
      parent.
    </p>
    <h2>
      <code>{'<Grid.Row />'}</code> Component
    </h2>
    <p>
      The <code>{'<Grid.Row />'}</code> component is a vertically-padded flexbox for housing grid column components.
      Grid column components should be placed within this row component. If the prop{' '}
      <code>{'alignmentMode={start|end|center|baseline|stretch}'}</code>
      is used with this component, the row will vertically align child columns. If the prop{' '}
      <code>{'noGutter={false}'}</code> is used, the row will not use vertical padding.
    </p>
    <h2>
      <code>{'<Grid.Column />'}</code> Component
    </h2>
    <p>
      The <code>{'<Grid.Column />'}</code> component is a horizontally-padded span for other UI components. If the prop{' '}
      <code>{'colSpan={number|number[0-4]}'}</code>
      is used with this component, the flex basis for the column will be set. If an array of 5 numbers is provided, the
      column will use each item in the column as the column span width at each of the 5 responsive breakpoints in
      ascending order of size. If the prop <code>{'noGutter={false}'}</code> is used, the column will not use horizontal
      padding. If the prop <code>{'spanMode="fitSpace"'}</code> is used, the column will only span the width of its
      contents. If the prop <code>{'noWrap={true}'}</code> is used, the contents of the column will not wrap. The prop{' '}
      <code>{'minWidth={string}'}</code> can be used to set a minimum width for a column with any CSS unit.
    </p>
  </StoryColumn>
));
