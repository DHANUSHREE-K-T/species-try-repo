import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  color:red;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
`;

export function App() {
  return (
    <StyledApp>
      <h1>Card</h1>

    </StyledApp>
  );
}

export default App;
