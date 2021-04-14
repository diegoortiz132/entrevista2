import React, {useState} from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'
import {Nav, CajaTitulos, Titulos, TituloHistoria, ImgLogo, ImgUser, ImgRegister, ImgRedes, 
        BoxRight, TituloDerecha, TituloDerecha1, Parrafo, ConoceMas,
        Footer, TextFooter, TextFooter2, TextFooter3 } from './styles.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Logo from './logo.png'
import User from './user.png'
import Register from './registro.png'
import Redes from './redes.png'
import Fondo1 from './Fotomanos.png'


export const Navbar = () => {
  const [menuRigth, setMenuRigth] = useState(false);
  const Animacion = () => {
      setMenuRigth(!menuRigth)
  } 
  return(
    <div>
      <Row>
          <Col span={5}>
            
            <Nav> 
              <ImgLogo src={Logo}/>
              <CajaTitulos>
                <Titulos>inicio</Titulos>
                <TituloHistoria onClick={Animacion}>Historia</TituloHistoria>
                <Titulos>Nuestra Cerveza</Titulos>
                <Titulos>Experencias Bolovia</Titulos>
                <Titulos>Modelos de mujer</Titulos>
                <Titulos>compras</Titulos>
              </CajaTitulos>
              <div style={{borderTop: '2px solid white', textAlign: 'center'}}>
                <ImgUser src={User}/>
                <ImgRegister src={Register}/>
              </div>
              <div style={{textAlign: 'center'}}>

                <ImgRedes src={Redes}/>
              </div>

            </Nav>
          </Col>
          <Col  
            md={{ span: 19 }}
            lg={{ span: 19 }}
            xl={{ span: 19 }}
            xxl={{ span: 19 }}
            >
            <div style={{ height: '927px'}}>
              <Carousel >
                  <div>
                      <img src={Fondo1} />

                  </div>
                  <div>
                      <img src={Fondo1} />
                  </div>
                  <div>
                      <img src={Fondo1}/>

                  </div>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Footer>
              <TextFooter style={{marginLeft: '180px'}}>Terminos de uso </TextFooter>
              <TextFooter> | </TextFooter>
              <TextFooter>Políticas de Privacidad </TextFooter>
              <TextFooter> | </TextFooter>
              <TextFooter>Hablemos de alcohol</TextFooter>
              <TextFooter> | </TextFooter>
              <TextFooter>Contáctanos</TextFooter>
              <TextFooter2 style={{marginLeft: '220px'}}> Anheuser-Busch InBev © 2021 </TextFooter2>
              <TextFooter3 style={{marginLeft: '220px'}}> TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO </TextFooter3>
            </Footer>
          </Col>
        </Row>
            {menuRigth 
                ?   <BoxRight>
                      
                        <TituloDerecha>Nuestra</TituloDerecha>
                        <TituloDerecha1>Historia</TituloDerecha1>
                        <Parrafo>Nuestra historia se puede simplificar en dos palabras: tradición y calidad. Desde hace 135 años estamos para celebrar el orgullo boliviano.</Parrafo>
                        <ConoceMas onClick={Animacion}>Conoce más</ConoceMas>
                    </BoxRight> 
                :   ""
              }
        
      </div>  
  )
}