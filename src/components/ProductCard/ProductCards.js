import { useRef, useState} from "react";
import Effect from "../effect/effect";
import logo from "../../assets/logo.svg";

function ProductCards({ title, price }) {
    const pRef = useRef(0);
    const [inputValue, setInputValue] = useState("class");

    function printTitle() {
        console.log("title clicked");
        console.log(pRef.current.innerText);

        if(pRef.current.style.display === "none") {
            pRef.current.style.display = "block";
        } else {
            pRef.current.style.display = "none";
        }
    }

    function changeInputValue(e) {
        // console.log(inputValue);
        setInputValue(e.target.value);
        // const str = inputRef.current.value;
        // oRef.current.innerText = `output here: ${str}`;
    }

    return (
        <div className="product-cards">
            <h2 onClick={printTitle}>{title}</h2>
            <p ref={pRef}>{price}</p>
            <img src={logo} alt="logo" />
            <p> add input here </p>
            <input type="text" onChange={changeInputValue} value={inputValue}/>
            <p >output here : {inputValue} </p>
            <Effect />
        </div>
    );
}

export default ProductCards;
