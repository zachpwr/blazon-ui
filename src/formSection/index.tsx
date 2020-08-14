import { lighten } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import Grid from '../grid';
import { EColumnSpanMode } from '../grid/column';
import { ERowAlignmentModes } from '../grid/row';
import { ITheme } from '../theme';

export enum FormSectionLabelPosition {
  top,
  leftSide,
  rightSide,
}

export interface IFormSection {
  children: (inputProps: {
    id: string;
    'aria-describedby': string | undefined;
    'aria-labelledby': string | undefined;
    'aria-required': boolean | undefined;
    'aria-invalid': boolean | undefined;
  }) => React.ReactElement | string;
  title: string;
  error?: string;
  info?: string;
  className?: string;
  required?: boolean;
  labelPosition?: FormSectionLabelPosition;
}

interface IFormSectionTitle {
  theme: ITheme;
  htmlFor: string;
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
  color: ${props => props.theme.colors[props.theme.neutralColor].dark};

  &::after {
    content: '${props => (props.required ? ' *' : '')}';
    color: ${props => props.theme.colors[props.theme.errorColor].medium};
    display: inline;
  }
`;

SectionTitle.displayName = 'SectionTitle';

const SectionError = styled.div<IFormSectionError>`
  color: ${props => props.theme.colors[props.theme.errorColor].medium};
  margin-top: 5px;
  font-size: 0.75em;
  font-weight: 600;
`;

SectionError.displayName = 'SectionError';

const SectionInfo = styled.div<IFormSectionInfo>`
  color: ${props => props.theme.colors[props.theme.neutralColor].medium};
  margin-top: 5px;
  font-size: 0.75em;
  font-weight: 600;
`;

SectionInfo.displayName = 'SectionInfo';

class FormSection extends React.PureComponent<IFormSection> {
  public static displayName = 'FormSection';
  private static uniqueIdCounter = 0;

  private uniqueId: string;

  constructor(props: IFormSection) {
    super(props);

    this.uniqueId = `BlazonUI__FormSection__${FormSection.uniqueIdCounter}`;
    FormSection.uniqueIdCounter++;
  }

  public render() {
    const { labelPosition } = this.props;

    if (labelPosition === FormSectionLabelPosition.leftSide) {
      return this.renderWithLabelOnLeftSide();
    }

    if (labelPosition === FormSectionLabelPosition.rightSide) {
      return this.renderWithLabelOnRightSide();
    }

    return this.renderWithLabelOnTop();
  }

  private renderWithLabelOnTop = () => {
    const { children, error, info, title, required } = this.props;

    // IDs for aria props
    const inputId = `${this.uniqueId}__input`;
    const labelId = `${this.uniqueId}__label`;
    const infoId = `${this.uniqueId}__info`;
    const errorId = `${this.uniqueId}__error`;

    return (
      <Grid.Container fluid>
        <Grid.Row noGutter>
          <Grid.Column>
            <SectionTitle required={required} id={labelId} htmlFor={inputId}>
              {title}
            </SectionTitle>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row noGutter>
          <Grid.Column>
            {children({
              'aria-describedby': (error && errorId) || (info && infoId) || undefined,
              'aria-invalid': !!error || undefined,
              'aria-labelledby': labelId,
              'aria-required': required,
              id: inputId,
            })}
            {!error && info && <SectionInfo id={infoId}>{info}</SectionInfo>}
            {error && <SectionError id={errorId}>{error}</SectionError>}
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    );
  };

  private renderWithLabelOnLeftSide = () => {
    const { children, error, info, title, required } = this.props;

    // IDs for aria props
    const inputId = `${this.uniqueId}__input`;
    const labelId = `${this.uniqueId}__label`;
    const infoId = `${this.uniqueId}__info`;
    const errorId = `${this.uniqueId}__error`;

    return (
      <Grid.Row alignmentMode={ERowAlignmentModes.baseline}>
        <Grid.Column spanMode={EColumnSpanMode.fitSpace} noWrap>
          <SectionTitle required={required} id={labelId} htmlFor={inputId}>
            {title}
          </SectionTitle>
        </Grid.Column>
        <Grid.Column>
          {children({
            'aria-describedby': (error && errorId) || (info && infoId) || undefined,
            'aria-invalid': !!error || undefined,
            'aria-labelledby': labelId,
            'aria-required': required,
            id: inputId,
          })}
          {!error && info && <SectionInfo id={infoId}>{info}</SectionInfo>}
          {error && <SectionError id={errorId}>{error}</SectionError>}
        </Grid.Column>
      </Grid.Row>
    );
  };

  private renderWithLabelOnRightSide = () => {
    const { children, error, info, title, required } = this.props;

    // IDs for aria props
    const inputId = `${this.uniqueId}__input`;
    const labelId = `${this.uniqueId}__label`;
    const infoId = `${this.uniqueId}__info`;
    const errorId = `${this.uniqueId}__error`;

    const alignmentMode = error || info ? ERowAlignmentModes.start : ERowAlignmentModes.baseline;

    return (
      <Grid.Row alignmentMode={alignmentMode}>
        <Grid.Column spanMode={EColumnSpanMode.fitSpace} noWrap>
          {children({
            'aria-describedby': (error && errorId) || (info && infoId) || undefined,
            'aria-invalid': !!error || undefined,
            'aria-labelledby': labelId,
            'aria-required': required,
            id: inputId,
          })}
        </Grid.Column>
        <Grid.Column>
          <SectionTitle required={required} id={labelId} htmlFor={inputId}>
            {title}
          </SectionTitle>
          {!error && info && <SectionInfo id={infoId}>{info}</SectionInfo>}
          {error && <SectionError id={errorId}>{error}</SectionError>}
        </Grid.Column>
      </Grid.Row>
    );
  };
}

export default FormSection;
