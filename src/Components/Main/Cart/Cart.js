
// import react/contexto

import { useContext, useEffect, useState } from "react";
import { My_Context } from "../../../context/My_context";

// import react-router
import { Link } from "react-router-dom";

// import Item_cart
import Item_Cart from "./Item_cart/Item_Cart";

const Cart = () => {

    const contexto = useContext(My_Context);

    const { Item, Quantity, Delete_all, Ask_for_TotalAmount } = contexto;

    const [TotalAmount, setTotalAmount] = useState();

    

    const Handle_deleteAll = () => {
        Delete_all();
    }

    const HandleCheckout = () => {
        Ask_for_TotalAmount(TotalAmount);
    }

    useEffect( () => {
        var Total = 0;

        Item.forEach( (element, idx) => {
            Total = (element.price * Quantity[idx]) + Total;
        });

        setTotalAmount(Total);

    },[Item])

   
    if(Item.length !== 0){

    return(
    <>
        <Link to="/">
            <button id="keep_buying">Seguir navegando</button>
        </Link>
        
        <section id="Cart_Container">

            <div className="titles">
                <h3>Carrito</h3>
                <h3>Guardados</h3>

                <button onClick={Handle_deleteAll}>Borrar todos los productos</button>
            </div>

            <div id="Items_container">
                {Item.map( (element, idx) => {
                    let cantidad = Quantity[idx];
            
                    return(
                        <Item_Cart item = {element} quantity = {cantidad} />
                    )
                })}
            </div>
                
            <div className="totalAmount">
                <h1>Precio total : {TotalAmount} </h1>
                <Link to="/checkout">
                    <button onClick={HandleCheckout}>Seguir con la totalidad de la compra</button>
                </Link> 
            </div>
                
        </section>
    </>
    ) 

    }else{
        return(
            <>
            <Link to="/">
                <button id="keep_buying">Seguir navegando</button>
            </Link>
            
            <section id="Cart_Container">
    
                <div className="titles">
                    <h3>Carrito</h3>
                    <h3>Guardados</h3>
    
                    <button onClick={Handle_deleteAll}>Borrar todos los productos</button>
                </div>
    
                   <Link to="/"><h1 className="Cart_Message">Lo siento no hay items agregados en carrito</h1></Link>
                    
            </section>
        </>
        )
    }
    
}

export default Cart;