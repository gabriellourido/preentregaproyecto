import React from 'react'
import './styles.scss'

const Item = ({title}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src="https://i.pcmag.com/imagery/reviews/02moADILfmMQco86wseEdn6-4..v1614827337.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Descripción del articulo en venta.</p>
          <a href="/#" className="btn btn-primary">Comprar</a>
        </div>
    </div>
  )
}

export default Item