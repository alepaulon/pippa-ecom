import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    const [productsLength, setProductsLength] = useState(0);


  useEffect(() => {
    setProductsLength(
      cart.reduce((prev, current) => prev + current.cantidad, 0)
    );
  }, [cart]);
    
    if(cart.length === 0) {
        return (
            <div className="bg-[#faeee7] border-4 border-[#fffffe] rounded-lg flex flex-col items-center min-h-screen">
                <h1 className="font-bold text-2xl text-[#33272a] text-center p-10">Carrito</h1>
                <h2 className="font-bold text-2xl text-[#33272a] text-center p-10">Nada por aquí aún!</h2>
                <Link to='/' className="bg-[#ff8ba7] text-white text-center max-w-fit p-10 transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4">Volver</Link>
            </div>
        )
    }

    return (
        <div className="bg-[#faeee7] border-4 border-[#fffffe] rounded-lg flex flex-col min-h-screen">
            <h1 className="font-bold text-2xl text-[#33272a] text-center p-10">Carrito</h1>
            <div className="grid grid-cols-5 gap-8 p-8 font-bold text-xl text-[#33272a]">
              <span>Nombre del Producto</span>
              <span>Cantidad</span>
              <span>Precio por Unidad</span>
              <span>Total del Producto</span>
            </div>
            { cart.map((item, i) => <CartItem key={i} item={item} productsLength={productsLength} />) }
            <h3 className="font-bold text-2xl text-[#33272a] text-center p-10">Total: ${total}</h3>
            <div className="flex flex-col self-center max-w-fit">
              <button className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4" onClick={() => clearCart()}>Vaciar carrito</button>
              <Link to='/checkout' className="bg-[#ff8ba7] text-white text-center transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4">Terminar compra</Link>
            </div>
        </div>
    )
}

export default Cart