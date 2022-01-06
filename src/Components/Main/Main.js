
// react-router

import { Routes, Route} from "react-router-dom";

// componente icon

import Icon from "../NavBar/icon/Icon";

// import shopping cart icon

import shoppingCart from "./images/carrito-de-compras.png"

// import ItemListContainer

import ItemListContainer from "./ItemListContainer/ItemListContainer"

// import ItemDetailContainer

import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"




const Main = () => {
    return(
        <main id="conteiner_main">
            
            <Icon src = {shoppingCart}>
                <div><p>0</p></div>
            </Icon>

            <Routes>
                <Route path= "/item/:id" element= {<ItemDetailContainer />} />
                <Route path= "/:category" element={<ItemListContainer greeting="productos"/>}/>
                <Route path= "/" element = {<ItemListContainer greeting = "Mis productos"/>}/>
            </Routes>

        </main>
    )
}

export default Main;