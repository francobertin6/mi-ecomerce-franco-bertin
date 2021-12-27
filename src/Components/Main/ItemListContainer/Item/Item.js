
const Item = ({items}) => {

    console.log(items)

    const map_items = items.map(function(element, idx){

        return(

        <div id={element.id} className="item_div">
            
            <div className="title">
                <h6>{element.title}</h6>
            </div>

            <img src={element.pictureUrl} alt="imagen"/>

            <div className="description">
                <p>{element.description}</p>

                <button>Conocer mas</button>
            </div>

            <div className="price">
                <p>Precio : {element.price}</p>
            </div>

        </div>
    )
    })  
    
    
    return(
        <>
            {map_items}
        </>
        
    )

}

export default Item;