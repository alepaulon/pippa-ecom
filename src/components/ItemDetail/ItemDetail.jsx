import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"

const ItemDetail = ({id, nombre, categoria, descripcion, img, precio, stock}) => {
    const [qtyAdded, setQtyAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setQtyAdded(cantidad)

        const item = {
            id, nombre, precio
        }

        addItem(item, cantidad)
    }



    return (
        <div className="flex justify-center">
            <article className="bg-blue-100 m-10 p-4 rounded-lg flex flex-col text-center w-80">
            <header>
                <h2 className="font-bold text-2xl">{nombre}</h2>
            </header>
            <picture>
                <img className="p-12" src={img} alt={nombre} />
            </picture>
            <section>
                <p className="font-bold text-xl mb-4">
                    ${precio}
                </p>
                <p className="text-lg mb-4">
                    Categoría: {categoria}
                </p>
                <p className="text-lg mb-4">
                    Descripción: {descripcion}
                </p>
            </section>
            <footer>
                {
                    qtyAdded > 0 ? (
                        <Link to='/cart'><button className="bg-cyan-400 hover:bg-cyan-500 rounded-2xl text-white font-semibold px-4 py-2">Finalizar compra</button> </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
        </div>
    )
}

export default ItemDetail