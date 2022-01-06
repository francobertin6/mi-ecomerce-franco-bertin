
const ItemDetail = ({item}) => {

    let {description, pictureUrl, price} = item

    console.log(description);

    return(
        <article id="ItemDetail">

                <div>
                    <p>asdjhGASJDgh AJHDGASJH DGjas dasdasdaskdj hASJKDhkashd kjHASDkj hsakjdh kjashdkhASDKjh aKSDJhkasdjhaksj HDkjaHDk jahdSKjhdASkjs haDKjhs akjhsa dasdasd</p>
                </div> 
                 
            
           
            <img src={pictureUrl} alt="imagen" />

           
                 <p>{price}</p>
            
           

        </article>
    )
}

export default ItemDetail;