import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext)


if (item.cantidad === 0) {
    removeItem(item)
}

return (
    <div>
      <div>
        <h2>{item.nombre}</h2>
      </div>

      <div>
        <p>{item.cantidad}</p>
      </div>

      <span>{item.precio}$</span>

      <button onClick={() => removeItem(item.id)}>X</button>
      <p>${item.cantidad * item.precio}</p>
    </div>
  );
};

export default CartItem
