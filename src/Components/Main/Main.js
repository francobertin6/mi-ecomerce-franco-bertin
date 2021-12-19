
// componente icon

import Icon from "../NavBar/icon/Icon";

// import shopping cart icon

import shoppingCart from "./images/carrito-de-compras.png"

// import ItemListContainer

import ItemListContainer from "./ItemListContainer/ItemListContainer"

// import ItemCount

import ItemCount from "./ItemCount/ItemCount";


const Main = () => {
    return(
        <main id="conteiner_main">

            <ItemListContainer greeting = "Bienvenido a mi E-commerce" />

            <Icon src = {shoppingCart}>
                <div><p>0</p></div>
            </Icon>

            <ItemCount 
                name = "Ejercicio contador con boton"
                stock={9}
                initial={0}
            />

        </main>
    )
}

export default Main;