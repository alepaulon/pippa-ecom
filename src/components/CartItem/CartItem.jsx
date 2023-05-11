import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext)


if (item.cantidad === 0) {
    removeItem(item)
}

return (
    <div className="bg-[#faeee7] grid grid-cols-5 gap-8 px-10 py-2 border-t-2 border-b-2 border-white align-middle">
      <div>
        <h2 className="pt-2">{item.nombre}</h2>
      </div>

      <div>
        <p className="pt-2">{item.cantidad}</p>
      </div>

      <span className="pt-2">${item.precio}</span>
      <p className="pt-2">${item.cantidad * item.precio}</p>
      <button onClick={() => removeItem(item.id)} className="bg-[#ff8ba7] text-white text-center max-w-fit transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full font-semibold px-4 py-2">X</button>

      
    </div>
  );
};

export default CartItem
