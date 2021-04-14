import React from 'react'
import {Row, Col} from 'antd'
import {Fondo1, Fondo2, Fondo3, Fondo4, Letrero, Letra} from './styles'

export const Products = () => {
  return(
    <div style={{background: '#84D1E3'}}>
      <Row>
        <Col
          xs={{ span: 24 }} 
          sm={{ span: 12 }}
          md={{ span: 10}}
          lg={{ span: 6}}
          xl={{ span: 6}}
          xxl={{ offset: 2,span: 3 }}
        >
          <Fondo1>
            <Letrero>
              <Letra>
                Para un hijo de la mezcla,😎 tres sabores rifados: Vicky Chamoy, Vicky Mango y Vicky Chelada.
              </Letra>
            </Letrero>
          </Fondo1>
        </Col>
        <Col
          xs={{ span: 24 }} 
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          xxl={{ offset: 2,span: 3 }}
        >
          <Fondo2>
            <Letrero>
              <Letra>
                ¡Pásele! ¡Pásele! Ya llegó la ¡Vicky Chamoy! 🍺🔥
              </Letra>
            </Letrero>
          </Fondo2>
        </Col>
        <Col
          xs={{ span: 24  }} 
          sm={{ span: 12  }}
          md={{ span: 10 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
          xxl={{ offset: 2,span: 3 }}
        >
          <Fondo3>
            <Letrero>
              <Letra>     
                Le venimos manejando lo que viene siendo la sabrosa ¡Vicky Mango! ⚡
              </Letra>
            </Letrero>
          </Fondo3>
        </Col>
        <Col
          xs={{ span: 24 }} 
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 3 }}
          xl={{ span: 6 }}
          xxl={{ offset: 2,span: 3 }}
        >
          <Fondo4>
            <Letrero>
              <Letra>
                Del barrio pa'l mundo, le traemos la ¡Vicky Chelada!💥👌🏽
              </Letra>
            </Letrero>
          </Fondo4>
        </Col>
      </Row>
    </div>
  )
}