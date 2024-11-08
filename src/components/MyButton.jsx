import { Button } from "react-bootstrap"; 
import { Fragment } from "react";

const MyButton = ({contador, setCount}) =>{
    console.log(contador);
    
    return (
        <div className="d-flex">
            <Button onClick={()=>setCount(contador = contador+1)}>+1</Button>
            <h2>{contador}</h2>
            <Button onClick={()=>setCount(contador = contador-1)}>-1</Button>
        </div>
    )
}

export default MyButton 