// import react-router

import { BrowserRouter} from "react-router-dom";

// import NavBar

import NavBar from "./Components/NavBar/NavBar";

// import Main

import Main from "./Components/Main/Main";

const App = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Main />
        </BrowserRouter>
       
    )
}

export default App;