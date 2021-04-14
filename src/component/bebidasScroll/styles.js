import styled, {keyframes} from 'styled-components'
import ImgBanner from '../../fondofrutas.png'

const Mymove = keyframes`
  from {transform: scale(0.9)}
  to {transform: scale(1.1)}
`

export const BannerFondo = styled.div`
  background-image: url(${ImgBanner});
  background-color: rgb(50,50,50);
   background-blend-mode: soft-light;
   width: 100%;
   height: 100%;
   background-size: cover;
   position: relative;
   background-repeat: no-repeat;
   background-position: 100%;

`

export const Logo1 = styled.img`
  margin: 100px 0px 0px 20px;
  width: 70%;
  height: 300px;
  left: 212px;
  top: 75px;
  animation: ${Mymove} 1.4s infinite;
  -webkit-animation-direction: alternate-reverse;
`
export const Logo2 = styled.img`
  margin: 40px 0px 0px 20px;
  width: 80%;
  height: 232px;
  left: 143px;
  top: 407px;
`
export const Logo3 = styled.img`
  margin: -279px 0px 0px 65px;
  width: 49%;
  height: 73px;
  left: 43px;
  top: 202px;
`
export const DivBebidas = styled.div`
  width: 100%;
  display: flex;
  margin: 200px 0px 0px 550px;
  position: relative;
  right: ${({ Left }) => Left};
  animation-duration: 2s;
  animation: ${Mymove} 1.4s;

`

export const Bebidas = styled.img`
  width: 540px;
  margin: 0px 10px 20px 10px;
  left: 150px;
`
