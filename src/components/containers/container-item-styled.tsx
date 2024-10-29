'use client'
import styled from 'styled-components';

// https://github.com/styled-components/styled-components/issues/4232
// https://styled-components.com/docs/api#transient-props
interface IProps {
  $backgroundColor?: string;
  $borderRadius?: string;
  $title?: string;
}

export const ContainerItem = styled.div<IProps>`
  flex-grow: 1;
  height: 100%;
  background-image: url('/images/private_banking.png');
  background-position: center;
  background-size: cover;

  background-color: ${props => props.$backgroundColor || 'red'};
  position: relative;
  border: 1px solid lighten(black, 10);
  border-radius: ${props => props.$borderRadius || '0px 0px 0px 0px'};
  transition: all 300ms ease-in-out;
  color: white;
  padding: 5px;
  &:hover {
    flex-grow: 4.3;
    background-color: lighten(darkred, 20);
  };

  &:hover > div {
    transition-property: bottom, transform;
    transition-duration: 1000ms;
    transition-timing-function: ease;
    transform: rotate(0deg);
    bottom: 0px;
  }

  &:hover > div::after {
    content: '${props => props.$title || ''}';
  }

  &:hover > ul {
    visibility: visible;
    opacity:1;
    transition-delay: 400ms;
    
  }

  /* para alinhamento compomente de texto */
  display: grid;
  align-items: end;
`;