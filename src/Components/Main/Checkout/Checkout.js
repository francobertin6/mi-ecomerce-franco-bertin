
// import react/context
import { useContext, useState } from "react";
import { My_Context } from "../../../context/My_context";

// import firestore
import db from '../../../Firebase/firebase.js';
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {

    const contexto = useContext(My_Context);

    const { TotalAmount, Item, Quantity} = contexto;
    
    const [newData, setnewData] = useState([])

   

    const Handle_buy = () => {

         Item.forEach( element => {
            
        setnewData([...newData, {
            id : element.id,
            titulo : element.title,
            precio : element.price}
        ]);

        })

        
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

        }, 10000);
        
    }
    
    return(
        <section id="Checkout">

            <div className="User_data">
                <input type="text" placeholder="Nombre" id="nombre" />
                <input type="text" placeholder="Apellido" id="apellido" />
                <input type="email" placeholder="Email" id="email" />
                <input type="number" placeholder="telefono" id="telefono" />
            </div>

            <div className="items_details">
                {Item.map( (element, idx) => {
                    return(
                        <>
                            <img src={element.pictureUrl} alt="imagen_producto" />
                            <h1>{element.title}</h1>
                            <p>{element.price * Quantity[idx]}</p>
                        </>
                    )
                })}
            </div>

            <div className="confirm_buy">
                <p>{TotalAmount}</p>
                <button onClick={Handle_buy}>Confirmar compra</button>
            </div>

        </section>
    )
}

export default Checkout;