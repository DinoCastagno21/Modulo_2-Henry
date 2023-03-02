import React from 'react';
import styled from "styled-components";


const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Buttons = styled.button`
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    background-Color: #72BFF2;  
    border: 1px solid black;

    &:hover {
      background-Color: #DEEBF4;
      border: 0.5px solid black;
    }
  `;
  


export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
