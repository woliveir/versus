'use client'
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  align-items: end;
  border: 1px solid green;
  height: 200px;
  width: 200px;
  padding: 5px;
  
  &:hover > div {
    transition:  transform 300ms;
    transition-timing-function: linear;
    transform: rotate(0deg);
  };

  &:hover > div::after {
    content:  'TESTE';
  };
`

const Content = styled.div`
  
  background-color: lightgreen;
  padding: 5px;
  text-align: left;
  transform: rotate(-90deg) translate(-10%, 0);
  transform-origin: left top ;
`


const Prova = () => {

  return (
    <Container>
        <Content>Bottom Content</Content>
    </Container>
  )
}

export default Prova;