import './app.css';
import { Content } from '../content';
import styled from '@emotion/styled';

export const Root = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;

export default function App() {
  return (
    <Root>
      <Content />
    </Root>
  );
}
