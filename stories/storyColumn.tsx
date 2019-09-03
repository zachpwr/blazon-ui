import styled from 'styled-components';

const StoryColumn = styled.div`
  padding: 10% 20%;

  code {
    font-family: monospace;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
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
`;

export default StoryColumn;
