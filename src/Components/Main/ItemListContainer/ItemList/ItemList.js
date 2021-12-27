
// import react 
import { useEffect, useState } from 'react';

// import Item
import Item from '../Item/Item'

// import json
import itemsJson from './items.json'


const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    let ItemsPromise = new Promise ((res, rej) => {
        res(itemsJson);
    })

    useEffect( () => {

        ItemsPromise.then(
            setProducts(itemsJson.items)
        )

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    if(loading === true){
        return(
        <>
        <h1>Cargando</h1>
        </>
        )
    }else{
        return(
            <Item items={products}/>
        )
    }
}

export default ItemList;