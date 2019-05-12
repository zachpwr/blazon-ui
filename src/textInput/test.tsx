import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import TextInput from './index';
import ThemeProvider from '../themeProvider';

describe('<TextInput />', () => {
  const onChangeMock = jest.fn();
  const onFocusMock = jest.fn();
  const onBlurMock = jest.fn();
  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <ThemeProvider>
        <TextInput onChange={onChangeMock} onFocus={onFocusMock} onBlur={onBlurMock} value="Hello" />
      </ThemeProvider>,
    );
  });

  afterEach(() => {
    component.unmount();
    jest.clearAllMocks();
  });

  it('should call the onFocus handler when focused', () => {
    component.find('TextInput').simulate('focus');
    expect(onFocusMock).toBeCalledTimes(1);
  });

  it('should call the onBlur handler when blurred', () => {
    component.find('TextInput').simulate('blur');
    expect(onBlurMock).toBeCalledTimes(1);
  });

  it('should call the onChange handler when changed', () => {
    const e = { target: { value: 'Hello!' } };
    component.find('TextInput').simulate('change', e);
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock.mock.calls[0][0].target.value).toBe('Hello!');
  });
});
