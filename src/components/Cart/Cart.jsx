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
            <div>
                <h1>Carrito</h1>
                <h2>Nada por aquí aún!</h2>
                <Link to='/'>Volver</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Carrito</h1>
            { cart.map((item, i) => <CartItem key={i} item={item} productsLength={productsLength} />) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Terminar compra</Link>
        </div>
    )
}

export default Cart