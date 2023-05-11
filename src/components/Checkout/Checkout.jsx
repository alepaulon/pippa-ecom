import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)


const Checkout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { total, cart } = useContext(CartContext);
  console.log(cart);
  
  const saveData = (data) => {
    
    const user = {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono
    };

    const cartToSave = {
      user: user,
      cart: cart,
      total: total,
    };
    console.log(cartToSave);

    const db = getFirestore();
    const cartCollection = collection(db, "cart");
    addDoc(cartCollection, cartToSave).then((response) =>
        MySwal.fire({
        title: "Pedido Tomado",
        text: `Gracias ${data.nombre} por su compra! \n Se ha enviado a su email: ${data.email} el ticket con la orden de su compra "${response.id}" `,
        icon: "success",
      })
    );
  };

  return (
    <div className="bg-[#faeee7] flex flex-col items-center border-4 border-[#fffffe] rounded-xl">
      <div>
        <form onSubmit={handleSubmit(saveData)} className="flex flex-col items-center">
          <h2 className="font-bold text-2xl text-[#33272a] text-center p-10">Datos de Envío</h2>
          <div>
            <div className="py-5">
              <input
                type={"text"}
                placeholder="Nombre y apellido"
                {...register("nombre", {
                  required: true,
                })} className="rounded-xl border px-10 text-center"
              />
              {errors.nombre?.type === "required" && (
                <p className="text-red-600 text-center">Nombre y apellido requerido</p>
              )}
            </div>
          </div>
          <div className="py-5">
            <input
              type={"text"}
              placeholder="Email"
              {...register("email", {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              className="rounded-xl border px-10 text-center"
            />
            {errors.email?.type === "pattern" && (
              <p className="text-red-600 text-center">Formato de mail incorrecto</p>
            )}
          </div>
          <div>
            <div className="py-5">
              <input
                type={"number"}
                placeholder="Numero de telefono"
                {...register("telefono", {
                  required: true,
                })}
                className="rounded-xl border px-10 text-center"
              />
            </div>
          </div>

          <button type={"submit"} className="bg-[#ff8ba7] text-white text-center max-w-fit transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full font-semibold px-4 py-2">
            <span>Enviar</span>
          </button>
        </form>

        <div className="flex flex-col items-center py-10">
          <span className="font-bold text-2xl text-[#33272a] pb-10">Resumen</span>
          {cart.map((it) => {
            return (
              <div key={it.id} className="grid grid-cols-2 gap-8 px-10 py-2 justify-between font-semibold">
                <p>
                  <span>
                    {it.nombre} X {it.cantidad}
                  </span>
                </p>
                <p>Subtotal: ${it.precio * it.cantidad}</p>
              </div>
            );
          })}
          <p className="p-20">
            <span className="font-bold text-2xl text-[#33272a] text-center">Total: ${total}</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;