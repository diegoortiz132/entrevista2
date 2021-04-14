import React from 'react'
import {Row, Col} from 'antd'
import {FooterWeb, LogoFooter, IconosRedes, Siguenos, Text, Text2, Text3, 
      FooterMovil, Siguenos2, IconosRedes1, Text4, Text5} from './styles.js'
import Logo from '../../Logo.png'
import Face from '../../face.png'
import Ins from '../../ins.png'
import Tik from '../../tik.png'
import Twi from '../../twi.png'
import You from '../../you.png'
import './style.css'

export const Historia = () => {
 
  return(
    <div>
      <FooterWeb>
        <Row>
          <Col   
            md={{ offset: 9, span: 10 }}
            lg={{ offset: 11, span: 10 }}
            xl={{ offset: 11, span: 10 }}
            xxl={{ offset: 11,span: 7 }}
          >
            <LogoFooter src={Logo} alt="Logo"/>
            <Siguenos style={{color: 'white'}}>SÍGUENOS</Siguenos>
          </Col>
        </Row>
        <Row>
          <Col   
            md={{ offset: 6, span: 13 }}
            lg={{ offset: 9, span: 13 }}
            xl={{ offset: 9, span: 13 }}
            xxl={{ offset: 10,span: 10 }}
          >
            <IconosRedes src={Face} alt="icono"/>
            <IconosRedes src={Ins} alt="icono"/>
            <IconosRedes src={Tik} alt="icono"/>
            <IconosRedes src={Twi} alt="icono"/>
            <IconosRedes src={You} alt="icono"/>
            <Text>
              ANHEUSER-BUSCH INBEV© 2021
            </Text>
          </Col>
        </Row>
        <Row>
          <Col   
            xs={{ offset: 2, span: 21 }} 
            sm={{ offset: 2, span: 20 }}
            md={{ offset: 1, span: 22 }}
            lg={{ offset: 5, span: 15 }}
            xl={{ offset: 5, span: 15 }}
            xxl={{ offset: 7,span: 13 }}
          >
            <div>
              <Text2> 
                TÉRMINOS Y CONDICIONES | POLÍTICA DE PRIVACIDAD | CONTACTO |
                TAP INTO YOUR BEER | TODO CON MEDIDA   
              </Text2> 
            </div>
          </Col>
        </Row>
        <Row>
          <Col   
            xs={{ offset: 2, span: 20 }} 
            sm={{ offset: 2, span: 20 }}
            md={{ offset: 4, span: 20 }}
            lg={{ offset: 8, span: 15 }}
            xl={{ offset: 8, span: 15 }}
            xxl={{ offset: 9,span: 9 }}
          >
            <Text3> 
              NO COMPARTAS ESTE CONTENIDO CON MENORES DE EDAD
            </Text3>
          </Col>
        </Row>

      </FooterWeb>

      <FooterMovil>
        <div style={{height: '76px', borderBottom: '2px solid #F3D228', marginBottom: '10px'}}>
          <Row>
            <Col   
              xs={{ span: 10 }} 
              sm={{ span: 10 }}  
            >
              <Siguenos2 >SÍGUENOS</Siguenos2>
            </Col>
            <Col   
              xs={{ offset: 2, span: 11 }} 
              sm={{ offset: 2, span: 11 }}  
            >
              <div style={{display: 'flex'}}>
                <IconosRedes1 src={Face} alt="icono"/>
                <IconosRedes1 src={Ins} alt="icono"/>
                <IconosRedes1 src={Tik} alt="icono"/>
                <IconosRedes1 src={Twi} alt="icono"/>
                <IconosRedes1 src={You} alt="icono"/>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{height: '205px', borderBottom: '2px solid #F3D228'}}>
          <Row>
            <Col   
              xs={{ offset: 1, span: 22 }} 
              sm={{ offset: 1, span: 22 }}
            >
              <Text4>
                ANHEUSER-BUSCH INBEV© 2021
              </Text4>
              <Text4> 
                TÉRMINOS Y CONDICIONES 
              </Text4> 
              <Text4> 
                POLÍTICA DE PRIVACIDAD    
              </Text4> 
              <Text4> 
                CONTACTO   
              </Text4> 
              <Text4> 
                TAP INTO YOUR BEER   
              </Text4> 
              <Text4> 
                TODO CON MEDIDA   
              </Text4> 
            </Col>
          </Row>
        </div>
        <Row>
          <Col   
            xs={{ offset: 9, span: 8 }} 
            sm={{ offset: 9, span: 8 }}
          >
              <LogoFooter src={Logo} alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col   
            xs={{ offset: 1, span: 22 }} 
            sm={{ offset: 1, span: 22 }}
          >
            <Text5> 
              NO COMPARTAS ESTE CONTENIDO CON MENORES DE EDAD
            </Text5>
          </Col>
        </Row>
      </FooterMovil>
    </div>  
  )
}