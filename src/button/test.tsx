import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Button from './index';
import ThemeProvider from '../themeProvider';

describe('<Button />', () => {
  const onClickMock = jest.fn();
  let component: ReactWrapper;

  afterEach(() => {
    component.unmount();
    jest.clearAllMocks();
  });

  describe('When enabled', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <Button onClick={onClickMock}>Hello</Button>
        </ThemeProvider>,
      );
    });

    test('it calls the onClick handler if clicked', () => {
      component.find('Button').simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('it renders the correct text', () => {
      expect(component.find('Button').text()).toBe('Hello');
    });
  });

  describe('When disabled', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <Button onClick={onClickMock} disabled>
            Hello
          </Button>
        </ThemeProvider>,
      );
    });

    test("it doesn't call the onClick handler if clicked", () => {
      component.find('Button').simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(0);
    });

    test('it renders the correct text', () => {
      expect(component.find('Button').text()).toBe('Hello');
    });
  });
});
