
// import react-router
import { Link } from 'react-router-dom'

// import img star
import stars from './images/estrella.png'

// import img like
import like1 from './images/like1.png'
import like2 from './images/like2.png'



const Item = ({items, category_value}) => {

    const {id, pictureUrl, user, title, user_stars, price, category } = items;

    const give_category_to_parent = () => {
        category_value(category)
    }

    give_category_to_parent();

    return(
    
         <div id={id} className="item_div">
            
            <div className="user">

                <img src={pictureUrl} alt="profile" className="profile_img"/>

                <p>{user}</p>
            </div>

            <img src={pictureUrl} alt="imagen"/>

            <div className="title">
                <Link to={"/item/" + id}>
                    <h6>{title}</h6>
                </Link>
            </div>

            <div className="stars">

                <img src={stars} alt="stars"/>

                <p>{user_stars}</p>

            </div>

            <div className="price">

                <img src={like1} alt="like" />

                <p>A partir de ${price}</p>
            </div>

        </div>
        
    )

}

export default Item;