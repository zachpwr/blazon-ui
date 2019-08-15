import * as React from 'react';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IFormSection {
  theme: ITheme;
  title: string;
  error?: string;
  className?: string;
  children?: React.ReactNode;
  required?: boolean;
}

interface IFormSectionTitle {
  theme: ITheme;
  required?: boolean;
}

interface IFormSectionError {
  theme: ITheme;
}

const SectionTitle = styled.div<IFormSectionTitle>`
  font-size: 1em;
  margin-bottom: 5px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkGray};

  &::after {
    content: '${props => (props.required ? ' *' : '')}';
    color: ${props => props.theme.colors.error};
    display: inline;
  }
`;

SectionTitle.displayName = 'SectionTitle';

const SectionError = styled.div<IFormSectionError>`
  color: ${props => props.theme.colors.error};
  margin-top: 5px;
  font-size: 0.75em;
  font-weight: 600;
`;

SectionError.displayName = 'SectionError';

const FormSection = styled((props: IFormSection) => (
  <div className={props.className}>
    <SectionTitle required={props.required}>{props.title}</SectionTitle>
    {props.children}
    {props.error && <SectionError>{props.error}</SectionError>}
  </div>
))`
  margin-bottom: 20px;
`;

FormSection.displayName = 'FormSection';

export default FormSection;
