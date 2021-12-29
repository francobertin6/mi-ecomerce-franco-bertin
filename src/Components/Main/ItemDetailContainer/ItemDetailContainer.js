// import react
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

// import ItemDetail
import ItemDetail from "./ItemDetail/ItemDetail";

// import itemJson

import itemJson from "./items.json";


const ItemDetailContainer = ({id_number}) => {

    const GetItem = () => {
        return new Promise ((res, rej) => {
            res(itemJson);
        })
    }

    const [ItemDetail, setItemDetail] = useState([]);

    useEffect( ()=>{
        
        setTimeout( () => {
            GetItem().then((res) => {
                setItemDetail(res.items[id_number]);
            })
        }, 2000)
    })

    return(
        <>
            <ItemDetail item = {ItemDetail}/>
        </>
    )
}