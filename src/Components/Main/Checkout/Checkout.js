
// import react/context
import { useContext, useState } from "react";
import { My_Context } from "../../../context/My_context";

// import firestore
import db from '../../../Firebase/firebase.js';
import { collection, addDoc } from "firebase/firestore";

// import react-router
import { Link } from "react-router-dom";

const Checkout = () => {

    const contexto = useContext(My_Context);

    const { TotalAmount, Item, Quantity} = contexto;
    
    const [newData, setnewData] = useState([])

   

    const Handle_buy = () => {

        console.log(Item)

        let newArray = []

        // foreach recorre el array items y coloca cada item en un nuevo array
        Item.forEach( (element, idx) => {
            
            let obj = {
                    id : element.id,
                    title : element.title,
                    price : element.price * Quantity[idx]
                }

            newArray.push(obj);    
            
        })
        // ese array se pushea al estado data que es un array con los items de la orden de compra
        setnewData([newArray]);
        
        setTimeout(() => {
            let data = {
            comprador : {
                usuario : document.getElementById("nombre").value,
                apellido : document.getElementById("apellido").value,
                email : document.getElementById("email").value,
                telefono : document.getElementById("telefono").value
            },
            items : newData,
            monto_total : TotalAmount, 
            }

        console.log(data);

        addDoc(collection(db, "ordenes"), data);

        }, 5000);
        
    }
    
    return(
        <section id="Checkout">

            <div className="items_details">

                <h1>Detalles de compra</h1>

                {Item.map( (element, idx) => {
                    return(
                        <div className="items">
                            <img src={element.pictureUrl} alt="imagen_producto" />
                            <h1>{element.title}</h1>
                            <p>Precio : {element.price * Quantity[idx]}</p>

                            <button>X</button>
                        </div>
                    )
                })}
            </div>

            <div className="User_data">

                <h1>Ingresar datos de usuario</h1>

                <input type="text" placeholder="Nombre" id="nombre" />
                <input type="text" placeholder="Apellido" id="apellido" />
                <input type="email" placeholder="Email" id="email" />
                <input type="number" placeholder="telefono" id="telefono" />
            </div>

            <div className="confirm_buy">
                <p>Precio total : {TotalAmount}</p>
                <button onClick={Handle_buy}>Confirmar compra</button>
                <Link to="/cart"><button className="return_cart">Volver a carrito</button></Link>
            </div>

        </section>
    )
}

export default Checkout;