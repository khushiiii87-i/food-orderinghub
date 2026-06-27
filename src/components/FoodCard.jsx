function FoodCard(props){
    return(
        <div className="FoodCard">
         <h2 className="title">{props.name}</h2>
         <img src={props.image} width="100" />
         <h3 className="price">price:{props.price}</h3>
         <button className="add-btn"onClick={()=>{props.AddtoCart(props.name);alert(`${props.name} 
            added to cart`)}}>Add to Cart</button>
        </div>
    )
}

export default FoodCard;