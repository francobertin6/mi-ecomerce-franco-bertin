
// import itemList
import ItemList from './ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

    return(
        <>
            <div className="main_title">
                <h1>{greeting}</h1>
            </div>

            <div id='item_container'>
                <ItemList />
            </div>
        </>       
    )
}

export default ItemListContainer;