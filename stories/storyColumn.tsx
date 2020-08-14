import styled from 'styled-components';

const StoryColumn = styled.div`
  padding: 10% 20%;

  code {
    font-family: 'Roboto Mono', monospace;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.gray.light};
    border-radius: ${({ theme }) => theme.borderRadius};
    display: block;
  }

  p code,
  h1 code,
  h2 code,
  h3 code,
  h4 code {
    display: inline-block;
    padding: 2px;
    margin: -2px 0;
  }

  h1 sup {
    font-size: 0.4em;
  }
`;

export default StoryColumn;
