'use client'
import styled from 'styled-components';

interface IProps {
  $title: string;
  $borderRadius?: string;
};

export const ContainerItemTitle = styled.div<IProps>`
  color: white;
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: left top;
  width: auto;
  padding: 5px;
  bottom: -5%;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(15px);
  border-radius: 10px 0px 0px 10px;
  &::before {
    content: '${props => props.$title || 'ops'}';
  }
`