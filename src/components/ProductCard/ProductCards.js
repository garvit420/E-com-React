import { useRef, useState } from "react";
import Effect from "../Effect/Effect";
// import logo from "../../assets/logo.svg";
import AddToCart from "../AddToCart/AddToCart";

function ProductCard({ product }) {
    const priceRef = useRef(null);
    const [inputValue, setInputValue] = useState("class");

    function togglePriceDisplay() {
        console.log("title clicked");
        console.log(priceRef.current.innerText);

        if (priceRef.current.style.display === "none") {
            priceRef.current.style.display = "block";
        } else {
            priceRef.current.style.display = "none";
        }
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <div className="product-card">
            <h2 onClick={togglePriceDisplay}>{product.title}</h2>
            <p ref={priceRef}>{product.price}</p>
            <AddToCart product={product}  />
            {/* <img src={logo} alt="logo" /> */}
            <p>Add input here:</p>
            <input type="text" onChange={handleInputChange} value={inputValue} />
            <p>Output here: {inputValue}</p>
            <Effect />
        </div>
    );
}

export default ProductCard;
