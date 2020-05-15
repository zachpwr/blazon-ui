import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';

import ThemeProvider from '../themeProvider';
import FormSection from './index';

describe('<FormSection />', () => {
  let component: ReactWrapper;

  afterEach(() => {
    component.unmount();
  });

  describe('When optional', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <FormSection title="Test Section">{() => 'Hello'}</FormSection>
        </ThemeProvider>,
      );
    });

    test('it renders the correct text', () => {
      expect(component.find('FormSection').text()).toContain('Test Section');
      expect(component.find('FormSection').text()).not.toContain('*');
    });
  });

  describe('When required', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <FormSection title="Test Section" required>
            {() => 'Hello'}
          </FormSection>
        </ThemeProvider>,
      );
    });

    test('it adds a red asterick to the title', () => {
      expect(component.find('SectionTitle').prop('required')).toBe(true);
    });
  });

  describe('When error', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <FormSection title="Test Section" error="Test Error">
            {() => 'Hello'}
          </FormSection>
        </ThemeProvider>,
      );
    });

    test('it renders the error message', () => {
      expect(component.find('SectionError')).toHaveLength(1);
      expect(component.find('SectionError').text()).toBe('Test Error');
    });
  });

  describe('When info', () => {
    beforeEach(() => {
      component = mount(
        <ThemeProvider>
          <FormSection title="Test Section" info="Test Info">
            {() => 'Hello'}
          </FormSection>
        </ThemeProvider>,
      );
    });

    test('it renders the info message', () => {
      expect(component.find('SectionInfo')).toHaveLength(1);
      expect(component.find('SectionInfo').text()).toBe('Test Info');
    });
  });
});
