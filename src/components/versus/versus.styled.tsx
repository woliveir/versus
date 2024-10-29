'use client'
import styled from 'styled-components';

interface IProps {
  background?: string;
  width?: string;
  height?: string;
}

const Letter = styled.div<IProps>`
  /* text center */
  color: white;
  display: table-cell;
  vertical-align: bottom;
  text-align: center; 
  font-weight: bold;
  font-family: monospace;
  padding: 2px 2px 0px 2px;
  border: 2px solid !important;
  border-radius: 30px 30px 0px 0px;
  /* div bottom */
  align-self: flex-end;
  width: ${props => props.width};
  background-color: ${props => props.background || 'red'};
  height: ${props => props.height || '100%'};
`;

// https://i.pinimg.com/originals/95/e7/ec/95e7ec6b98c3cc762bdeb6179b779ca1.jpg
// https://htmlcolorcodes.com/
//https://stackoverflow.com/questions/46443652/react-16-warning-expected-server-html-to-contain-a-matching-div-in-body


export const Versus = () => {

  const versus = [{
    letter: 'v',
    backgroundColor: '#f4d03f',
    height: '30px',
    width: 'calc(100%/7)'
  },
  {
    letter: 'e',
    backgroundColor: '#008080',
    height: '40px',
    width: 'calc(100%/7)'
  },{
    letter: 'r',
    backgroundColor: '#58d68d',
    height: '50px',
    width: 'calc(100%/7)'
  },{
    letter: 's',
    backgroundColor: '#8e44ad',
    height: '60px',
    width: 'calc(100%/7)'
  },{
    letter: 'u',
    backgroundColor: '#cd6155',
    height: '35px',
    width: 'calc(100%/7)'
  },{
    letter: 's',
    backgroundColor: '#3498db',
    height: '15px',
    width: 'calc(100%/7)'
  },
];

  return (
    <table style={{width:'100px'}}>
      <tbody>
        <tr> 
          {versus.map( (letters, idx) => {
            return (
              <td key={idx}>
                <Letter
                  background = {letters.backgroundColor} 
                  width = {letters.width} 
                  height = {letters.height}
                >
                  {letters.letter}
                </Letter>
              </td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}