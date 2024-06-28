import { useEffect, useState } from "react";
import { loadCategories } from "../../Stores/Categories";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Categories() {
    const categories = useSelector((state) => state.categories.categories);
    const products = useSelector((state) => state.products.products);

    function filterByCategory(category) {
        console.log("filter by category", category);
    }

    // const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    },[])
    return (<div>
        {categories.map((item)=> {
            return(
            <button onClick={() => filterByCategory(item)} key={item.id}>{item.name}</button>)
        })}
    </div>)
}

export default Categories;