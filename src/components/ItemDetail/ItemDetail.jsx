import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"

const ItemDetail = ({id, nombre, descripcion, img, precio, stock}) => {
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
        <div className="bg-[#faeee7] border-4 border-[#fffffe] rounded-lg flex justify-center">
            <article className="bg-[#ffc6c7] m-10 p-4 rounded-lg flex flex-col text-center w-80 ">
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
                    Descripción: {descripcion}
                </p>
            </section>
            <footer>
                {
                    qtyAdded > 0 ? (
                        <Link to='/cart'><button className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4">Finalizar compra</button> </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                <Link to='/'><button className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4">Seguir comprando</button></Link>
            </footer>
        </article>
        </div>
    )
}

export default ItemDetail