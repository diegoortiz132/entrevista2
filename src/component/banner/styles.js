import styled, {keyframes} from 'styled-components'
import ImgBanner from '../../fondofrutas.png'

const Mymove = keyframes`
  from {transform: scale(0.9)}
  to {transform: scale(1.1)}
`

export const BannerFondo = styled.div`
  background-image: url(${ImgBanner});
  width: 100%;
  height: 1000%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 70%;

`

export const Logo1 = styled.img`
  margin: 120px 0px 0px 10px;
  width: 90%;
  height: 90%;
  left: 212px;
  top: 75px;
  animation: ${Mymove} 1.4s infinite;
  -webkit-animation-direction: alternate-reverse;
`
export const Logo2 = styled.img`
  margin: 20px 0px 0px -50px;
  width: 138%;
  height: 232px;
  left: 143px;
  top: 407px;
`
export const Logo3 = styled.img`
  margin: -278px 0px 0px 35px;
  width: 80%;
  height: 80%;
  left: 43px;
  top: 202px;
  border-radius: 20px;
`
export const DivBebidas = styled.div`
  display: flex;
  margin: 120px 0px 0px 500px;
  position: relative;
  right: ${({ Left }) => Left};

`

export const Bebidas = styled.img`
  width: 540px;
  margin: 0px 10px 20px 10px;
  left: 150px;
`
