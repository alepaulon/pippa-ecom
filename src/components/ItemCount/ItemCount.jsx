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
                <button className="px-4 m-2 rounded-full bg-slate-300" onClick={dec}> - </button>
                <h3 className="p-2 m-2">{cantidad}</h3>
                <button className="px-4 m-2 rounded-full bg-slate-300" onClick={inc}> + </button>
            </div>
            <div>
                <button className=" p-2 m-2 rounded-full bg-slate-300" onClick={() => onAdd(cantidad)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount