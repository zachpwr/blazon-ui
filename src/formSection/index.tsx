import { lighten } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IFormSection {
  children: (inputProps: {
    id: string;
    'aria-describedby': string | undefined;
    'aria-labelledby': string | undefined;
  }) => React.ReactElement;
  theme: ITheme;
  title: string;
  error?: string;
  info?: string;
  className?: string;
  required?: boolean;
}

interface IFormSectionTitle {
  theme: ITheme;
  for: string;
  required?: boolean;
}

interface IFormSectionError {
  theme: ITheme;
}

interface IFormSectionInfo {
  theme: ITheme;
}

const SectionTitle = styled.label<IFormSectionTitle>`
  display: block;
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

class FormSection extends React.PureComponent<IFormSection> {
  private static uniqueIdCounter = 0;

  private uniqueId: string;

  constructor(props: IFormSection) {
    super(props);

    this.uniqueId = `BlazonUI__FormSection__${FormSection.uniqueIdCounter}`;
    FormSection.uniqueIdCounter++;
  }

  public render() {
    const { className, children, error, info, title, required } = this.props;

    // IDs for aria props
    const inputId = `${this.uniqueId}__input`;
    const labelId = `${this.uniqueId}__label`;
    const infoId = `${this.uniqueId}__info`;
    const errorId = `${this.uniqueId}__error`;

    return (
      <div className={className}>
        <SectionTitle required={required} id={labelId} for={inputId}>
          {title}
        </SectionTitle>
        {children({
          'aria-describedby': (error && errorId) || (info && infoId) || undefined,
          'aria-labelledby': labelId,
          id: inputId,
        })}
        {!error && info && <SectionInfo id={infoId}>{info}</SectionInfo>}
        {error && <SectionError id={errorId}>{error}</SectionError>}
      </div>
    );
  }
}

const StyledFormSection = styled(FormSection)`
  margin-bottom: 20px;
`;

StyledFormSection.displayName = 'FormSection';

export default StyledFormSection;
