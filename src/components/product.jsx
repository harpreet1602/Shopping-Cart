let Product = () => {
    return <div className="product">
         <Link to = "/preview/1">
        <div className="product_img">
        <img src="phone.jpeg"/>

        </div>     
        </Link> 
        <div className="product_button">
            <button 
            onClick = {() => {
                console.log("dispatching an action");
                dispatchEvent(addToCart(1));
            }}
            >Buy</button>
        </div>
    </div>;
};
export default Product;