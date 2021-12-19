import { useState } from "react";

// import minus icon

import Minus from "../images/remove_black_24dp.svg";

// import add icon

import Add from "../images/add_black_24dp.svg"

const ItemCount = ({name, stock, initial}) => {

    const [number, setNumber] = useState(initial);

    const onAdd = () => {
        if(number >= stock){
            return undefined;
        }else{
            setNumber(number + 1)
        }
    }

    const onMinus = (e) => {
        if(number <= 0){
            return undefined;
        }else{
            setNumber(number - 1)
        }
    }

    return(
        <div id="Count_container">

            <h6>{name}</h6>
            <div id="Input_container">
                    <img src={Minus} onClick={onMinus} alt="minus"/>
                <input type="number" min={0} max={stock} id="ItemCount_input" value={number}/>
                    <img src={Add} onClick={onAdd} alt="max"/>
            </div>
                   
            <button>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount;