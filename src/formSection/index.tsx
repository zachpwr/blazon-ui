import * as React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { ITheme } from '../theme';

export interface IFormSection {
  theme: ITheme;
  title: string;
  error?: string;
  info?: string;
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

interface IFormSectionInfo {
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

const SectionInfo = styled.div<IFormSectionInfo>`
  color: ${props => lighten(0.25, props.theme.colors.darkGray)};
  margin-top: 5px;
  font-size: 0.75em;
  font-weight: 600;
`;

SectionInfo.displayName = 'SectionInfo';

const FormSection = styled((props: IFormSection) => (
  <div className={props.className}>
    <SectionTitle required={props.required}>{props.title}</SectionTitle>
    {props.children}
    {!props.error && props.info && <SectionInfo>{props.info}</SectionInfo>}
    {props.error && <SectionError>{props.error}</SectionError>}
  </div>
))`
  margin-bottom: 20px;
`;

FormSection.displayName = 'FormSection';

export default FormSection;
