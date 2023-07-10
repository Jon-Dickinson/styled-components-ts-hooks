import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const InteractiveImageWrap = styled.div`
  display: inline-flex;
  min-height: 250px;
  min-width: 200px;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(360deg) rotateZ(0deg) skew(0deg);
  }
  100% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
  }
`;

const RotatePoint = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  will-change: transform;
  transform-style: preserve-3d;
  animation: ${ spin } 30s linear;
  animation-iteration-count: infinite;
`;

const Row = styled.div<{ rotation: number }>`
  display: inline-flex;
  width: 100%;
  min-height: 16px;
  justify-content: space-between;
  align-items: center;
  transform: rotateX(0deg) rotateY(${ ({ rotation }) => rotation }deg) rotateZ(0deg);
  transform-style: preserve-3d;
`;

const Disc = styled.div`
  display: inline-flex;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e4e000;
`;

const Line = styled.div`
  display: inline-flex;
  width: 100%;
  height: 1px;
  background-color: #f7f7f7;
`;

export function Helix() {
  return (
    <InteractiveImageWrap>
      <RotatePoint>
        {Array(18)
          .fill(0)
          .map((_value, index) => (
            <Row key={index} rotation={index * 10}>
              <Disc />
              <Line />
              <Disc />
            </Row>
          ))}
      </RotatePoint>
    </InteractiveImageWrap>
  )
}
