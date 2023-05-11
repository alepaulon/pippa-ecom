import { useState } from "react"

function ItemCount({  initial, stock, onAdd }) {

    const [cantidad, setCantidad] = useState(initial)

    const inc = () => {
        if(cantidad < stock)
            setCantidad(cantidad + 1);
    }
    const dec = () => {
        if (cantidad > initial)
        setCantidad(cantidad - 1);
    }
    


    return (
        <div className="self-center">
            <div className="flex justify-between">
                <button className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4" onClick={dec}> - </button>
                <h3 className="p-2 m-2">{cantidad}</h3>
                <button className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4" onClick={inc}> + </button>
            </div>
            <div>
                <button className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4" onClick={() => onAdd(cantidad)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount