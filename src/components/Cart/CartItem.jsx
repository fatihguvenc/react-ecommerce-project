import React from "react";

// const style = {
//   width: "290px",
//   height: "290px"

// }

const CartItem = ({item, handleUpdateQuantity, handleRemoveItem, size}) => {


  return(
    <div className="row mt-5 mb-2">
      <div className="col-sm-3">
      <img src={item.media.source} alt="" className="w-100"/>
      </div>
      <div className="col-sm-6 d-flex flex-column justify-content-around">
        <h4 className="fw-bold">{item.name}</h4>
        <div>
        <span className="price-area p-2 fs-6">{item.line_total.formatted_with_symbol}</span>
        </div>
        
      </div>
      <div className="col-sm-3 d-flex">
      <i onClick={() => handleRemoveItem(item.id)} className="fas fa-trash-alt my-auto me-4 border rounded-pill p-2"></i>
        <div className="d-flex flex-column justify-content-center">
      <i onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="fas fa-plus border rounded-pill p-2 mb-1"></i>
      <span className="text-center fw-bold fs-5 mb-1">{item.quantity}</span>
      <i onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="fas fa-minus border rounded-pill p-2"></i>
      </div>
      </div>
    </div>





      // <div className="col-sm-12">
      //  <div className="row">
      //     <div className="col-sm-3">
      //       <img src={item.media.source} alt={item.name} className="image" style={style}/>
      //       <p>{item.name}</p>
      //       <p>{item.line_total.formatted_with_symbol}</p>
      //       <p>{item.quantity}</p>
      //       <p>{size}</p>
      //       <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
      //       <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      //       <button onClick={() => handleRemoveItem(item.id)}>remove</button>
      //     </div>
      //  </div>
      // </div>
  )
}

export default CartItem