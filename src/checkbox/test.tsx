import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Checkbox from './index';
import ThemeProvider from '../themeProvider';

describe('<Checkbox />', () => {
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
          <Checkbox onClick={onClickMock} />
        </ThemeProvider>,
      );
    });

    test('it calls the onClick handler if clicked', () => {
      component.find('Checkbox').simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('When disabled', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <Checkbox onClick={onClickMock} disabled />
        </ThemeProvider>,
      );
    });

    test("it doesn't call the onClick handler if clicked", () => {
      component.find('Checkbox').simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(0);
    });
  });
});
