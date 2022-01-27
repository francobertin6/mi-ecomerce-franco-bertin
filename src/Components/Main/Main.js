
// react-router

import { Routes, Route} from "react-router-dom";

// import ItemListContainer

import ItemListContainer from "./ItemListContainer/ItemListContainer"

// import ItemDetailContainer

import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"

// import Cart
import Cart from "./Cart/Cart";

// import checkout
import Checkout from "./Checkout/Checkout";






const Main = () => {
    return(
        <main id="conteiner_main">
            <Routes>
                <Route path= "/item/:id" element= {<ItemDetailContainer />} />
                <Route path= "/:category" element={<ItemListContainer />}/>
                <Route path= "/" element = {<ItemListContainer />}/>
                <Route path= "/cart" element = {<Cart />}/>
                <Route path= "/checkout" element = {<Checkout />}/>
            </Routes>

        </main>
    )
}

export default Main;