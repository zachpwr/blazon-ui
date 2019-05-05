import styled from 'styled-components';

import Button from '../button';

const ButtonGroup = styled.div`
  ${Button} {
    border-radius: 0;
    margin-right: 0;
    z-index: 0;
    position: relative;

    &:first-of-type {
      border-top-left-radius: ${props => props.theme.borderRadius};
      border-bottom-left-radius: ${props => props.theme.borderRadius};
    }

    &:last-of-type {
      border-top-right-radius: ${props => props.theme.borderRadius};
      border-bottom-right-radius: ${props => props.theme.borderRadius};
    }

    &:focus {
      z-index: 1;
    }
  }
`;

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
