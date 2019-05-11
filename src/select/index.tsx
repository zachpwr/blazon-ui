import { ellipsis, getLuminance, mix } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import Button from '../button';

const DEFAULT_COLOR = 'main';

export interface ISelectProps {
  theme: DefaultTheme;
  onSelect: (value: string) => void;
  choices: Array<{ value: string; text: string }>;
  value: string;
  color?: string;
  disabled?: boolean;
}

export interface ISelectInnerProps {
  theme: DefaultTheme;
  onSelect: (value: string) => void;
  choices: Array<{ value: string; text: string }>;
  value: string;
  className?: string;
  color?: string;
  disabled?: boolean;
}

function getDropdownColor(props: ISelectInnerProps): string {
  return props.theme.colors[props.color || DEFAULT_COLOR];
}

function getArrowColor(props: ISelectInnerProps): string {
  const bgColor = getDropdownColor(props);
  return getLuminance(bgColor) > 0.5 ? props.theme.colors.darkGray : props.theme.colors.white;
}

const SelectMenuRow = styled.button`
  background-color: ${props => props.theme.colors.white};
  padding: 0.75em 1em;
  margin: 5px 0;
  display: block;
  width: 100%;
  outline: 0;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;

  &:hover {
    background-color: ${props => mix(0.5, props.theme.colors.secondary, props.theme.colors.white)};
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.white};
  font-size: 0.75em;
  min-width: 110%;
  max-width: 150%;
  margin: 5px 0 0 0;
`;

class Select extends React.Component<ISelectInnerProps> {
  public state = {
    menuIsVisible: false,
  };
  private node: React.RefObject<HTMLDivElement>;

  constructor(props: ISelectInnerProps) {
    super(props);

    this.node = React.createRef();
  }

  public componentDidMount() {
    window.addEventListener('mousedown', this.handleGlobalClick, false);
  }

  public componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleGlobalClick, false);
  }

  public render() {
    const { className, color, value, choices, disabled } = this.props;
    const { menuIsVisible } = this.state;

    const buttonText = choices.reduce((acc, choice) => {
      if (!acc && choice.value === value) {
        return choice.text;
      }
      return acc;
    }, '');

    return (
      <span className={className} ref={this.node}>
        <Button color={color} onClick={this.toggleMenu} disabled={disabled}>
          {buttonText}
        </Button>
        {menuIsVisible && this.renderMenu()}
      </span>
    );
  }

  private toggleMenu = () => {
    const { menuIsVisible } = this.state;
    this.setState({
      menuIsVisible: !menuIsVisible,
    });
  };

  private closeMenu = () => {
    this.setState({
      menuIsVisible: false,
    });
  };

  private handleGlobalClick = (e: Event) => {
    if (this.node.current && e.target instanceof Node && this.node.current.contains(e.target)) {
      return;
    }

    this.closeMenu();
  };

  private handleSelect = (value: string) => {
    const { onSelect } = this.props;
    onSelect(value);
    this.closeMenu();
  };

  private renderMenu = () => (
    <SelectMenu>
      {this.props.choices.map(({ value, text }) => (
        <SelectMenuRow key={value} onClick={() => this.handleSelect(value)}>
          {text}
        </SelectMenuRow>
      ))}
    </SelectMenu>
  );
}

const StyledSelect = styled((props: ISelectInnerProps) => <Select {...props} />)<ISelectProps>`
  margin-right: 5px;
  position: relative;
  display: inline-block;

  ${Button} {
    ${ellipsis('200px')}
    position: relative;
    padding-right: 2.5em;

    &::after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      display: inline-block;
      border-width: 0 1px 1px 0;
      border-style: solid;
      transform: translateY(-50%) rotate(45deg);
      margin-top: -2px;
      position: absolute;
      right: 1em;
      top: 50%;
      border-color: ${getArrowColor};
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

StyledSelect.displayName = 'Select';

export default StyledSelect;