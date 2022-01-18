
// import react_router
import { Link } from "react-router-dom";


const WidgetCart = () => {

    return(
        <div className="icon_img">
            <Link to="/cart"><img src= "images/carrito-de-compras.png" alt="imagen"/></Link>
            <div><p>0</p></div>
        </div>
    )
}

export default WidgetCart;