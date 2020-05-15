import { ellipsis, getLuminance, mix, transparentize } from 'polished';
import * as React from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

import { ITheme } from '../theme';

import Button from '../button';

const DEFAULT_COLOR = 'main';

const trailingDebounce = (fn: (...args: any[]) => void, timeout: number) => {
  let currentTimeout: NodeJS.Timeout;
  return (...args: any[]) => {
    if (currentTimeout) {
      clearTimeout(currentTimeout);
    }
    currentTimeout = setTimeout(() => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      fn(...args);
    }, timeout);
  };
};

export interface ISelectProps {
  theme: ITheme;
  onSelect: (value: string) => void;
  choices: Array<{ value: string; text: string }>;
  value: string;
  color?: string;
  disabled?: boolean;
  noWrap?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  id?: string;
}

export interface ISelectInnerProps {
  theme: ITheme;
  onSelect: (value: string) => void;
  choices: Array<{ value: string; text: string }>;
  value: string;
  className?: string;
  color?: string;
  disabled?: boolean;
  noWrap?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  id?: string;
}

function getDropdownColor(props: ISelectInnerProps): string {
  return props.theme.colors[props.color || DEFAULT_COLOR];
}

function getArrowColor(props: ISelectInnerProps): string {
  const bgColor = getDropdownColor(props);
  return getLuminance(bgColor) > 0.5 ? props.theme.colors.darkGray : props.theme.colors.white;
}

const SelectMenuRow = styled.li`
  padding: 0.75em 1.5em;
  margin: 0 5px;
  display: block;
  outline: 0;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  font-size: 1em;
  border-radius: 2px;
  -webkit-tap-highlight-color: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background-color: ${props => mix(0.5, props.theme.colors.secondary, props.theme.colors.white)};
  }

  &:last-of-type {
    border-bottom: 0;
  }

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 2.5px;
    display: inline-block;
    background-color: ${props => props.theme.colors.main};
    vertical-align: middle;
    margin-right: 0.5em;
    margin-left: calc(-0.5em - 5px);
    transform: scale(0);
    opacity: 0;
    transition: 0.25s transform ease-in-out, 0.25s opacity ease-in-out, 0.25s background-color ease-in-out,
      0.25s color ease-in-out;
  }

  &[aria-selected='true'] {
    background-color: ${props => mix(0.1, props.theme.colors.main, props.theme.colors.white)};
    color: ${props => props.theme.colors.main};
    cursor: default;

    &::before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const SelectMenu = styled(({ children, buttonRef, menuRef, noWrap, ...props }) => {
  const [didReceiveMenuRef, setDidReceiveMenuRef] = React.useState(!!menuRef.current);
  const { styles, attributes } = usePopper(buttonRef.current, menuRef.current, {
    modifiers: [
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: ['top', 'bottom'],
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 5],
        },
      },
      {
        name: 'preventOverflow',
      },
    ],
    placement: 'bottom-start',
  });

  return (
    <ul
      tabIndex={-1}
      style={styles.popper}
      ref={current => {
        if (current && !didReceiveMenuRef) {
          // Trigger re-render to properly align popper
          setDidReceiveMenuRef(true);
        }
        menuRef.current = current;
      }}
      {...attributes.popper}
      {...props}
    >
      {children}
    </ul>
  );
})`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.white};
  max-height: 350%;
  margin: 0;
  box-shadow: 0 2px 8px ${props => transparentize(0.8, props.theme.colors.darkGray)};
  border: 2px solid transparent;
  padding: 5px 0;
  outline: none;
  z-index: 1;
  white-space: ${props => (props.noWrap ? 'nowrap' : null)};
  overflow-y: auto;
  transition: 0.25s border-color ease-in-out;

  &:focus {
    border-color: ${props => transparentize(0.75, props.theme.colors.darkGray)};
  }
`;

class Select extends React.Component<ISelectInnerProps> {
  private static uniqueIdCounter = 0;
  public state = {
    alphanumericKeysPressed: '',
    menuIsVisible: false,
  };
  private containerRef: React.RefObject<HTMLDivElement>;
  private buttonRef: React.RefObject<HTMLButtonElement>;
  private menuRef: React.RefObject<HTMLUListElement>;
  private selectedChoiceRef: React.RefObject<HTMLLIElement>;
  private uniqueId: string;

  private debouncedHandleMenuKeyDownAlphanumeric = trailingDebounce(() => {
    this.setState({
      alphanumericKeysPressed: '',
    });
  }, 1000);

  constructor(props: ISelectInnerProps) {
    super(props);

    this.containerRef = React.createRef();
    this.buttonRef = React.createRef();
    this.menuRef = React.createRef();
    this.selectedChoiceRef = React.createRef();
    this.uniqueId = `BlazonUI__Select__${Select.uniqueIdCounter}`;
    Select.uniqueIdCounter++;
  }

  public componentDidUpdate(prevProps: ISelectInnerProps) {
    const { value } = this.props;
    if (prevProps.value !== value && this.menuRef.current && this.selectedChoiceRef.current) {
      if (this.menuRef.current.scrollTop > this.selectedChoiceRef.current.offsetTop - 5) {
        this.menuRef.current.scrollTop = this.selectedChoiceRef.current.offsetTop - 5;
      } else if (
        this.menuRef.current.scrollTop + this.menuRef.current.offsetHeight <
        this.selectedChoiceRef.current.offsetTop + this.selectedChoiceRef.current.offsetHeight
      ) {
        this.menuRef.current.scrollTop =
          this.selectedChoiceRef.current.offsetTop -
          this.menuRef.current.offsetHeight +
          this.selectedChoiceRef.current.offsetHeight +
          10;
      }
    }
  }

  public render() {
    const {
      className,
      color,
      value,
      choices,
      disabled,
      'aria-describedby': ariaDescribedBy,
      'aria-labelledby': ariaLabelledBy,
      id,
    } = this.props;
    const { menuIsVisible } = this.state;

    const buttonText = choices.reduce((acc, choice) => {
      if (!acc && choice.value === value) {
        return choice.text;
      }
      return acc;
    }, '');

    return (
      <span className={className} ref={this.containerRef}>
        <Button
          color={color}
          onClick={() => {
            if (!menuIsVisible) {
              this.showMenu();
            }
          }}
          disabled={disabled}
          ref={this.buttonRef}
          aria-haspopup="listbox"
          aria-expanded={menuIsVisible || undefined}
          aria-describedby={ariaDescribedBy}
          aria-labelledby={ariaLabelledBy}
          id={id}
        >
          {buttonText}
        </Button>
        {menuIsVisible && this.renderMenu()}
      </span>
    );
  }

  private showMenu = () => {
    this.setState(
      {
        menuIsVisible: true,
      },
      () => {
        if (this.menuRef.current) {
          this.menuRef.current.focus();

          if (this.selectedChoiceRef.current) {
            this.menuRef.current.scrollTop = this.selectedChoiceRef.current.offsetTop - 5;
          }
        }
      },
    );
  };

  private closeMenu = () => {
    this.setState(
      {
        menuIsVisible: false,
      },
      () => {
        if (this.buttonRef.current) {
          this.buttonRef.current.focus();
        }
      },
    );
  };

  private handleMenuKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const { choices, value, onSelect } = this.props;
    const { alphanumericKeysPressed } = this.state;

    if (!choices.length) {
      return;
    }

    const selectedI = choices.reduce((acc, choice, i) => {
      if (acc !== -1 || choice.value !== value) {
        return acc;
      }

      return i;
    }, -1);

    switch (e.keyCode) {
      case 13:
      case 27:
        // Enter/esc keys -- close menu and keep selection
        e.preventDefault();
        this.closeMenu();
        break;
      case 35:
        // End key -- go to last item
        e.preventDefault();
        onSelect(choices[choices.length - 1].value);
        break;
      case 36:
        // Home key -- go to first item
        e.preventDefault();
        onSelect(choices[0].value);
        break;
      case 38:
        // Up key -- go to previous item
        if (selectedI !== 0) {
          e.preventDefault();
          onSelect(choices[selectedI - 1].value);
        }
        break;
      case 40:
        // Down key -- go to next item
        if (selectedI !== choices.length - 1) {
          e.preventDefault();
          onSelect(choices[selectedI + 1].value);
        }
        break;
      default:
        const { key, ctrlKey, metaKey, altKey } = e;
        if (key.length === 1 && !ctrlKey && !metaKey && !altKey) {
          e.preventDefault();
          e.stopPropagation();

          const nextAlphanumericKeysPressed = `${alphanumericKeysPressed}${key}`.toLowerCase();
          const match = choices.find(({ text }) => {
            return text.toLowerCase().startsWith(nextAlphanumericKeysPressed);
          });

          if (match) {
            onSelect(match.value);
          }

          this.setState(
            {
              alphanumericKeysPressed: nextAlphanumericKeysPressed,
            },
            this.debouncedHandleMenuKeyDownAlphanumeric,
          );
        }
        break;
    }
  };

  private renderMenu = () => {
    const { value, noWrap = true } = this.props;
    return (
      <SelectMenu
        aria-activedescendant={`${this.uniqueId}__Item__${this.props.value}`}
        role="listbox"
        menuRef={this.menuRef}
        buttonRef={this.buttonRef}
        onKeyDown={this.handleMenuKeyDown}
        onBlur={this.closeMenu}
        noWrap={noWrap}
      >
        {this.props.choices.map(choice => (
          <SelectMenuRow
            key={choice.value}
            onClick={() => {
              if (value !== choice.value) {
                this.props.onSelect(choice.value);
              }
            }}
            id={`${this.uniqueId}__Item__${choice.value}`}
            role="option"
            aria-selected={choice.value === value}
            ref={value === choice.value ? this.selectedChoiceRef : null}
          >
            {choice.text}
          </SelectMenuRow>
        ))}
      </SelectMenu>
    );
  };
}

const StyledSelect = styled((props: ISelectInnerProps) => <Select {...props} />)<ISelectProps>`
  margin-right: 5px;
  position: relative;
  display: inline-block;
  margin-right: 5px;

  ${Button} {
    ${ellipsis('200px')}
    position: relative;
    padding-right: 2.5em;

    &::after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      display: inline-block;
      border-width: 0 2px 2px 0;
      border-style: solid;
      transform: translateY(-50%) rotate(45deg);
      margin-top: -2px;
      position: absolute;
      right: 1em;
      top: 50%;
      border-color: ${getArrowColor};
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

StyledSelect.displayName = 'Select';

export default StyledSelect;
