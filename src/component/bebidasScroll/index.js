import React from 'react';
import { Row, Col } from 'antd';
import {BannerFondo, Bebidas, DivBebidas} from './styles.js';

import Bebida1 from '../../bebidaroja.png';
import Bebida2 from '../../bebidaamarilla.png';
import Bebida3 from '../../bebidaazul.png';

export const BebidasScroll = () => {

  return(
    <div style={{overflowY: 'scroll'}}>
      <BannerFondo >

        <Row>
          <Col 
            xs={{ offset: 4, span: 19 }} 
            sm={{ offset: 4, span: 19}}
            md={{ offset: 4, span: 17 }}
            lg={{ offset: 2, span: 7 }}
            xl={{ offset: 2, span: 8 }}
            xxl={{ offset: 4,span: 5 }}
            >
            <div>
              
            </div>
          </Col>
          <Col 
            xs={{ span: 7 }} 
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 22 }}
            lg={{ span: 4 }}
            xl={{ span: 6 }}
            xxl={{ span: 10 }}
            >
            <DivBebidas style={{overflowX: 'scroll'}}>
              <Bebidas src={Bebida1}/>
              <Bebidas src={Bebida2}/>
              <Bebidas src={Bebida3}/>
            </DivBebidas>
          </Col>
        </Row>
      </BannerFondo>
    </div>
  )
}