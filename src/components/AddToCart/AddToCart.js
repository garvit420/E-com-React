
function AddToCart({product, cart, increaseQuantity, decreaseQuantity}) {
    function increase(){
        increaseQuantity(product);
    }
    function decrease(){
        decreaseQuantity(product);
    }
    return (
        <>
            <p>Cart: {cart[product.id] ? cart[product.id].quantity : 0}</p>
            <button onClick={increase}>Add to Cart</button>
            <button onClick={decrease}>Remove from Cart</button>
        </>
    );
}

export default AddToCart;