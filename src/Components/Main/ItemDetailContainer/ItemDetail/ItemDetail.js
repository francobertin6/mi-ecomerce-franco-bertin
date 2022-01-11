
// import ItemCount
import ItemCount from "../ItemCount/ItemCount";

// import react
import { useState } from "react";


const ItemDetail = ({item}) => {

    let {title, description, pictureUrl, price} = item

    console.log(description);

    const [Count, SetCount] = useState();

    const onAdd = (value) => {

        console.log("en itemDetail");
        console.log(value);
    }

    return(
        <article id="ItemDetail">

            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="description">
                <p>{description}</p>
            </div> 
                 
            <img src={pictureUrl} alt="imagen" />

            

            <div className="Options">

                <p className="price">${price}</p>

                <ItemCount name="Agregar a carrito" stock={10} initial={0} onAdd={ onAdd }
                />

            </div>
                 
        </article>
    )
}

export default ItemDetail;