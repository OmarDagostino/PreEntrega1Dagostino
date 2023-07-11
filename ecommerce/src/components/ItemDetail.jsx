export const ItemDetail = ({moneda}) => {
  
    return (<>
<div> {moneda.valor} </div>
 <img id= "imagen-de-detalle" src={moneda.detalle} alt={moneda.valor} />
 </>    )
    }
    