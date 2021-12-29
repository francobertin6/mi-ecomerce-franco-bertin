
const ItemDetail = ({item}) => {

    return(
        <div>

            <p>{item.description}</p>

            <img src={pictureUrl} alt="imagen" />

            <p>{item.price}</p>

        </div>
    )
}

export default ItemDetail;