import { useState } from "react";

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
                    <img src="/remove_black_24dp.svg" onClick={onMinus} alt="minus" className="minus"/>
                <input type="number" min={0} max={stock} id="ItemCount_input" value={number}/>
                    <img src="/add_black_24dp.svg" onClick={onAdd} alt="max" className="max"/>
            </div>

        </div>
    )
}

export default ItemCount;