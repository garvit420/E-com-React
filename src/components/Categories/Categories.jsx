import { useEffect, useState } from "react";
import { loadCategories } from "../../Stores/Categories";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateProduct } from "../../Stores/Products";

function Categories() {
    const categories = useSelector((state) => state.categories.categories);
    
    
    
    
    // const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    },[])
    const products = useSelector((state) => state.products.products);

    function filterByCategory(category) {
        let p = products.filter((product) => product.category === category.id);
        console.log("products", p);
        console.log("filter by category", category);
        // useEffect(() => {
            dispatch(updateProduct(category.id));
        // },[])
    }

    return (<div>
        {categories.map((item)=> {
            return(
            <button onClick={() => filterByCategory(item)} key={item.id}>{item.name}</button>)
        })}
    </div>)
}

export default Categories;