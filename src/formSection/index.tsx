import * as React from 'react';
import styled from 'styled-components';

export interface IFormSection {
  theme: DefaultTheme;
  title: string;
  error?: string;
  className?: string;
  children?: React.ReactNode;
  required?: boolean;
}

interface IFormSectionTitle {
  theme: DefaultTheme;
  required?: boolean;
}

interface IFormSectionError {
  theme: DefaultTheme;
}

const SectionTitle = styled.div<IFormSectionTitle>`
  font-size: 1em;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.daryGray};

  &::after {
    content: '${props => (props.required ? ' *' : '')}';
    color: ${props => props.theme.colors.error};
    display: inline;
  }
`;

const SectionError = styled.div<IFormSectionError>`
  color: ${props => props.theme.colors.error};
  margin-top: 5px;
  font-size: 0.75em;
`;

const FormSection = styled((props: IFormSection) => (
  <div className={props.className}>
    <SectionTitle required={props.required}>{props.title}</SectionTitle>
    {props.children}
    {props.error && <SectionError>{props.error}</SectionError>}
  </div>
))``;

FormSection.displayName = 'FormSection';

export default FormSection;
