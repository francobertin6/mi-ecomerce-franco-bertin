
// import react/context
import { useEffect, useState, useContext } from 'react';
import { My_Context } from '../../../context/My_context';

// import react-router
import { useParams } from 'react-router-dom';

// import itemList
import ItemList from './ItemList/ItemList'

// import CartWidget
import WidgetCart from '../Cart/WidgetCart.js'

// import DB firebase
import db from "../../../Firebase/firebase.js"
import { collection, getDocs } from "firebase/firestore"



const ItemListContainer = ({greeting}) => {

    const contexto = useContext(My_Context);

    const {Categories} = contexto;
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();

    const collections = collection(db, "items");
    
    let ItemsPromise = getDocs(collections)

    // arreglar bug en el items.splice del efecto (a menos que hayan 5 elementos no los agrupa en un array)
    
    useEffect( () => {

        setLoading(true);
        const firstArray = [];
        const NewArray = [];
        
        if(category === undefined){ 
            
            /*  si no hay categoria definida se traeran todos los productos  */ 

            ItemsPromise.then((res) => {
                
                const docs = res.docs;
                docs.forEach( doc => {
                    firstArray.push(doc.data());
                })
                    /* filtra el array entre las categorias */ 
                for (let index = 0; index < Categories.length; index++) {
                        let elemento_category = Categories[index]
                        NewArray.push(firstArray.filter( element => element.category === elemento_category));
                    }
                })

                /* ese array se pusheara en el estado products */ 
                setProducts(NewArray);

                setTimeout(() => {
                    setLoading(false)
                }, 2000)
                    
               // console.log(NewArray)
            
            }else{
            /* si hay una categoria se buscara solo traer esos productos */ 
            ItemsPromise.then((res) => {

                const docs = res.docs;
                
                docs.forEach( doc => {
                    firstArray.push(doc.data());
                })
               
                /* se filtraran los productos por categoria */
                let filter_elements = firstArray.filter( element => element.category === category)
                /* se maparean esos productos retornandolos  */
                let category_map = filter_elements.map( element => {
                        return element
                })

                console.log(category_map)
                
                /* ese map ira al nuevo array */
                NewArray.push(category_map);

                })
                
                
                // console.log(NewArray);
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

        <WidgetCart />

        <h1>Cargando</h1>

        </>
        )
    }else{
        return(
            <>

            <WidgetCart />

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
