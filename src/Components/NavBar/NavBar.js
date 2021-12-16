
// import icon
import Icon from "./icon/Icon"
import Icon_src from './icon/atomic-structure.png'

// import category
import Category from "./category/Category"

// import search
import Search from "./search/Search"


const NavBar = () => {

    return(
        <section id="NavBar">
            <div className="div1">
               <Icon src = {Icon_src}>
                    <h1>Mi-Ecomerce</h1>
               </Icon>
               <Search />
               <div className="paragraphs_container">
                   <h3>loren ipsum</h3>
                   <h3>loren ipsum</h3>
                   <h3 id="Login_btn">Iniciar sesion</h3>
               </div>
               <button id="Join_btn">Unete</button>
            </div>
            <div className="div2">
                
                <Category  name = "categoria1"/>
                <Category  name = "categoria2"/>
                <Category  name = "categoria3"/>
                <Category  name = "categoria4"/>
                <Category  name = "categoria5"/>
                <Category  name = "categoria6"/>
                
            </div>
        </section>
    )
    
}

export default NavBar