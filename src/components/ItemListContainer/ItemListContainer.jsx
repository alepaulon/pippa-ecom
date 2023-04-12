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
        <div className="flex flex-col justify-center mt-10">
            <h1 className="text-center font-bold text-3xl">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;