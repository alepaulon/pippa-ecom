import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../services/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    console.log(products)

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            
            .catch(error => {
                console.error(error)
            })
            
    }, [categoryId]
    )

    return (
        <div className="flex flex-col justify-center mt-10">
            <h1 className="text-center font-bold text-3xl">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;