import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/asyncMock";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    
    return (
        <div className="flex justify-center text-2xl font-semibold mt-10">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;