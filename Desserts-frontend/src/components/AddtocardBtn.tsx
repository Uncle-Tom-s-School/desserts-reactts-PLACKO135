import React, { useState } from "react";

const AddtocardBtn = () => {
  const [quantity, setquantity] = useState(0);

  const inc = () => {
    setquantity(quantity + 1);
  };
  const dec = () => {
    setquantity(quantity - 1);
  };

  return (
    <>
      
      {quantity === 0 ? 
        <div className="addbtn" onClick={inc}>AddtocardBtn</div>
       : 
        <div className="addbtn used">
          <button onClick={inc}>+</button>
          {quantity}
          <button onClick={dec}>-</button>
        </div>
      }
    </>
  );
};

export default AddtocardBtn;
