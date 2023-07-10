import React, { useState } from 'react';
import { Helix } from '../helix';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Base = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const baseHeaderStyle = css`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-height: 60px;
`;

const Header = styled.div`
  ${ baseHeaderStyle };

  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid #ffffff;
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

export function Content(type: any): any {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <Base>
      <Header
        onClick={ () => setIsOpen(!isOpen) }
      >
        <p>Click to toggle display helix</p>
      </Header>
      <Card
        className={ ` ${ isOpen ? 'display' : 'hidden' } ` }
      >
        <Helix/>
      </Card>
    </Base>
  );
}
