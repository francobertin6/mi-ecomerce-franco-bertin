
// import react 
import { useEffect, useState } from 'react';

// import react-router
import { useParams } from 'react-router-dom';

// import itemList
import ItemList from './ItemList/ItemList'

// import json
import itemsJson from './items.json'




const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    console.log(category)

    let ItemsPromise = new Promise ((res, rej) => {
        res(itemsJson);
    })

    // arreglar bug en el items.splice del efecto (a menos que hayan 5 elementos no los agrupa en un array)
    
    useEffect( () => {

        setLoading(true);
        const NewArray = [];
        
        if(category === undefined){ 
            
            /*  si no hay categoria definida se traeran todos los productos  */ 

            ItemsPromise.then((res) => {
                const {items} = res
                    /* se borraran 5 productos y se trasladaran a un nuevo array */ 
                for (let index = 0; index < items.length; index++) {
                        NewArray.push(items.splice(0,5));
                    }
                })
                /* ese array se pusheara en el estado products */ 
                setProducts(NewArray);

                setTimeout(() => {
                    setLoading(false)
                }, 2000)
                    
                console.log(NewArray)

        }else{
            /* si hay una categoria se buscara solo traer esos productos */ 
            ItemsPromise.then((res) => {

                const {items} = res;

                /* se filtraran los productos por categoria */
                let filter_elements = items.filter( element => element.category === category)
                /* se maparean esos productos retornandolos  */
                let category_map = filter_elements.map( (element) => {
                    if(element.category === category){
                        return element
                    }
                })
                
                /* ese map ira al nuevo array */
                NewArray.push(category_map);

                })

                console.log(NewArray);
                /* ese array se pusheara en el estado products */
                setProducts(NewArray);

                setTimeout(() => {
                    setLoading(false)
                }, 2000)  
        }

    }, [category])

    

    if(loading === true){
        return(
        <>

        <div className="main_title">
            <h1>{greeting}</h1>
        </div>

        <h1>Cargando</h1>

        </>
        )
    }else{
        return(
            <>

            <div className="main_title">
                <h1>{greeting}</h1>
            </div>

            <section id='itemListContainer'>

                {products.map( element => {
                    return(
                        <ItemList items = {element} />
                    )
                })}
                
            </section>
            
            
            </>
        )
    }
}

export default ItemListContainer;
