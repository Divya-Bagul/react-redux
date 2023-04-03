import React from "react";
function Propex(props){
    return(
        <>

        <h1>{props.data}</h1>
        <h1>{props.Datafun(3,4,8)}</h1>

        </>
    )
}
export default Propex;