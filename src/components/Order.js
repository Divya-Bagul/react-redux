
import React from 'react'
function Order(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
                Order  
   {props.data.length}
               
            </div>
        </div>
    )
}

export default  Order;
