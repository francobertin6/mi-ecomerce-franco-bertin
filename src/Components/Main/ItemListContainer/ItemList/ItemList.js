
// import Item
import Item from '../Item/Item'


const ItemList = ({items}) => {

   return(
       <article id='item_container'>
           {items.map(element => {
                return(
                    <Item items={element}/>        
                )
        })}
       
       </article>
   )
}

export default ItemList;