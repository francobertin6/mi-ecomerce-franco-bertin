
// import ItemCount
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({item}) => {

    let {title, description, pictureUrl, price} = item

    console.log(description);

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

                <ItemCount name="Agregar a carrito" stock={10} initial={0}
                />

                <button id="Buy">Comprar</button>
            </div>
                 
        </article>
    )
}

export default ItemDetail;