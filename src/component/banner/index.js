import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import {BannerFondo, Logo1, Logo2, Logo3, Bebidas, DivBebidas} from './styles.js';
import LogoHijos from '../../logohijos.png';
import Nueva from '../../nueva.png';
import Nueva1 from '../../subtitulo.png';
import Bebida1 from '../../bebidaroja.png';
import Bebida2 from '../../bebidaamarilla.png';
import Bebida3 from '../../bebidaazul.png';

export const Banner = () => {
  const [move , setMove] = useState(0);
  
  const ScrollMove = e => {    
      setMove(window.scrollY)
      
  };
  
  useEffect(() => {
    window.addEventListener('scroll', ScrollMove)
  }, [])
  const pixelLeft = `${move}px`
  console.log({pixelLeft})
  console.log({move})

  return(
    
    <BannerFondo >
      <Row>
          <Col 
            xs={{ offset: 5, span: 15 }} 
            sm={{ offset: 5, span: 15}}
            md={{ offset: 6, span: 12 }}
            lg={{ offset: 2, span: 7 }}
            xl={{ offset: 5, span: 6 }}
            xxl={{ offset: 5,span: 3 }}
            >
            <div>
              <Logo1 src={LogoHijos}/>
              <Logo2 src={Nueva}/>
              <Logo3 src={Nueva1}/>
            </div>
          </Col>
          <Col 
            xs={{ offset: 10, span: 4 }} 
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 22 }}
            lg={{ span: 4 }}
            xl={{ span: 6 }}
            xxl={{ span: 10 }}
            >
            <DivBebidas Left={pixelLeft}>
              <Bebidas src={Bebida1}/>
              <Bebidas src={Bebida2}/>
              <Bebidas src={Bebida3}/>
            </DivBebidas>
          </Col>
        </Row>
      </BannerFondo>
  )
}