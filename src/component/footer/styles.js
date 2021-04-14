import styled from 'styled-components';

/* 
* ESTILOS DE RESPONSIVE GRANDE
*/

export const FooterWeb = styled.div`
  background: #911712;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoFooter = styled.img`
  margin: 20px 0px 15px;
  right: 1.57%;
  top: 5.6%;
  bottom: 2.17%;
  height: 75px;
`
export const Siguenos = styled.h3`
  right: 41.65%;
  top: 34.12%;
  bottom: 63.04%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin: 10px 0px 15px 25px;
`

export const IconosRedes = styled.img`
  left: 30%;
  right: 28.45%;
  top: 10%;
  bottom: 10%;
  margin: 5px 5px 20px 15px;
  padding: 0px 0px 0px 25px;
  height: 13px;
`

export const Text = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* or 173% */
  /* White DPxM */
  color: #F7F7F7;
  margin: 0px 0px 10px 25px;
`
export const Text2 = styled.h3`
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  /* or 173% */
  /* White DPxM */
  color: #F7F7F7;
`
export const Text3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 26px;
  /* or 173% */
  /* White DPxM */
  color: #F7F7F7;
  margin: 0px 0px 40px 10px;
`

/* 
* ESTILOS DE RESPONSIVE pequeño
*/

export const FooterMovil = styled.div`
  background: #000000;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Siguenos2 = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 4px;
  color: #FFFFFF;
  margin: 30px 0px 0px 20px;
`
export const IconosRedes1 = styled.img`
  left: 30%;
  right: 28.45%;
  top: 10%;
  bottom: 10%;
  margin: 30px 0px 0px 15px;
  height: 15px;
`
export const Text4 = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  color: #F7F7F7;
`
export const Text5 = styled.h3`
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 140%;
  /* identical to box height, or 14px */
  text-align: center; 
  color: #F7F7F7;
  margin: 0px 0px 40px 10px;
`

