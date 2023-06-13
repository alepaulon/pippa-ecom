import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'item'), where('categoria', '==', categoryId))
            : collection(db, 'item')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])
    return (
        <div className="bg-[#faeee7] flex flex-col justify-center border-4 border-[#fffffe] rounded-xl">
            <h1 className="text-center font-bold text-3xl">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer;