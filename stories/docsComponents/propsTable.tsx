import { mix } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

export interface IPropDetails {
  [propName: string]: {
    propTypeName: string;
    description: string;
    isRequired?: boolean;
    defaultValue?: string;
  };
}

export interface IPropsTable {
  propDetails: IPropDetails;
}

const Table = styled.table`
  font-size: 1em;
  border-collapse: collapse;
  width: 100%;
`;

const THead = styled.thead``;

const TBody = styled.tbody``;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: ${props => mix(0.5, props.theme.colors.secondary, props.theme.colors.white)};
  }
`;

const TH = styled.th`
  font-weight: 600;
  text-align: left;
  padding: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

const TD = styled.td<{ isCode?: boolean }>`
  font-family: ${props => (!!props.isCode ? "'Roboto Mono', monospace" : null)};
  font-weight: 400;
  color: ${props => props.theme.colors.darkGray};
  padding: 1em;
`;

const PropsTableContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
`;

const PropsTable = (props: IPropsTable) => {
  const rows = Object.entries(props.propDetails).map(([propName, propDetails]) => (
    <TR key={propName}>
      <TD isCode>{propName}</TD>
      <TD isCode>{propDetails.propTypeName}</TD>
      <TD>{propDetails.isRequired ? '✅' : ''}</TD>
      <TD isCode>
        {propDetails.defaultValue && propDetails.propTypeName === 'string'
          ? `"${propDetails.defaultValue}"`
          : propDetails.defaultValue}
      </TD>
      <TD>{propDetails.description}</TD>
    </TR>
  ));

  return (
    <PropsTableContainer>
      <Table>
        <THead>
          <TR>
            <TH>Prop</TH>
            <TH>Type</TH>
            <TH>Required?</TH>
            <TH>Default Value</TH>
            <TH>Description</TH>
          </TR>
        </THead>
        <TBody>{rows}</TBody>
      </Table>
    </PropsTableContainer>
  );
};

PropsTable.displayName = 'PropsTable';

export default PropsTable;
