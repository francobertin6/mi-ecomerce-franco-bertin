
// componente icon

import Icon from "../NavBar/icon/Icon";

// import shopping cart icon

import shoppingCart from "./images/carrito-de-compras.png"

// import ItemListContainer

import ItemListContainer from "./ItemListContainer/ItemListContainer"




const Main = () => {
    return(
        <main id="conteiner_main">

            <ItemListContainer greeting = "Bienvenido a mi E-commerce" />

            <Icon src = {shoppingCart}>
                <div><p>0</p></div>
            </Icon>


        </main>
    )
}

export default Main;