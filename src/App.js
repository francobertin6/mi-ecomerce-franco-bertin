// import react-router/react
import { useEffect } from "react";
import { BrowserRouter} from "react-router-dom";

// import NavBar

import NavBar from "./Components/NavBar/NavBar";

// import Main

import Main from "./Components/Main/Main";

// import contexto
import Provider_component from "./context/My_context";


const App = () => {

    return(
        <BrowserRouter>
            <NavBar />
            <Provider_component>
                <Main />
            </Provider_component> 
        </BrowserRouter>
       
    )
}

export default App;



// setDoc para importar los productos a la base de datos



