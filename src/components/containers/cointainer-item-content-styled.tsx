'use client'
import styled from 'styled-components';

// https://medium.com/rd-shipit/advanced-ways-to-write-styled-components-97ce210404e3
export const ContainerItemContent = styled.ul`
  visibility: hidden;
  opacity:0;
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: ease;
  color: white;
  position: absolute;
  top: 0;
  padding: 0px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(15px);
  border-radius: 10px 10px 10px 10px;
`;