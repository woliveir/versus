'use client'

import React, { useRef, useState, useEffect } from 'react';
import './ghost.css';

interface ISize {
  width: number;
  height: number;
};

interface IMouse {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

const ghost = () => {

  // coordenadas do mouse
  const [mouse, setMouse] = useState<IMouse>({
    x: 0, 
    y: 0
  });

  useEffect(() => {

    const handleWindowMouseMove = (event: React.MouseEvent | any ): void => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);



  // https://stackoverflow.com/questions/72822172/how-to-get-html-element-width-dynamically-even-on-page-resize-in-react
  const documentRef = useRef(null);
  const [ size, setSize ] = useState<ISize>({width: 0, height: 0});

  useEffect( () => {
    // quando o componente eh montado
    setSize({width: documentRef.current ? documentRef.current['offsetWidth'] : 0,
            height: documentRef.current ? documentRef.current['offsetHeight'] : 0
    });

    // handle resize
    const getSize = () => {
      setSize({width: documentRef.current ? documentRef.current['offsetWidth'] : 0,
            height: documentRef.current ? documentRef.current['offsetHeight'] : 0
      });
    };
    // adiciona o event listener quando o componente for montado
    window.addEventListener('resize', getSize);

    // remove o event listener antes do componente ser desmontado
    return () => window.removeEventListener('resize', getSize);
  }
  , [])

  
  return (
    <div style={{height: '100vh', width: '100vw'}} ref={documentRef}>
    <div className='box'>
      <h1>{mouse.x} - {mouse.y}</h1>
      <h1>{size.width} - {size.height}</h1>
      <h1>x: {100*mouse.x/size.width - 100}</h1>
      <h1>y: {((size.height/2 - mouse.y)/size.height)*300}</h1>

      mouseY = event.pageY;
  yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
      
      <div className='box__ghost'>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        
        <div className='box__ghost-container'>
          <div className='box__ghost-eyes' style={{transform:`translate(${100*mouse.x/size.width - 100}%,${-((size.height/2 - mouse.y)/size.height)*300}%)`}}>
            <div className='box__eye-left'></div>
            <div className='box__eye-right'></div>
          </div>
          <div className='box__ghost-bottom'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='box__ghost-shadow'></div>
      </div>
      
      <div className='box__description'>
        <div className='box__description-container'>
          <div className='box__description-title'>Whoops!</div>
          <div className='box__description-text'>It seems like we couldn't find the page you were looking for</div>
        </div>
        
        <a href='https://codepen.io/diogo_ml_gomes/' target='_blank' className='box__button'>Go back</a>
        
      </div>
      
    </div>
    </div>
  )

};

export default ghost;