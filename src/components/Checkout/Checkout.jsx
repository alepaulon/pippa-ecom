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
        title: "Pedido Tomado!",
        text: `Muchas gracias ${data.nombre} por su compra! \n Se ha enviado a su Email: ${data.email} el ticket con la orden de su compra "${response.id}" `,
        icon: "success",
      })
    );
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(saveData)}>
          <h2>Datos de Envio</h2>
          <div>
            <div>
              <input
                type={"text"}
                placeholder="Nombre y apellido"
                {...register("nombre", {
                  required: true,
                })}
              />
              {errors.nombre?.type === "required" && (
                <p>Nombre y apellido requerido!</p>
              )}
            </div>
          </div>
          <div>
            <input
              type={"text"}
              placeholder="Email"
              {...register("email", {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email?.type === "pattern" && (
              <p>Formato de Email incorrecto!</p>
            )}
          </div>
          <div>
            <div>
              <input
                className="numeroInput"
                type={"number"}
                placeholder="Numero de telefono"
                {...register("telefono", {
                  required: true,
                })}
              />
            </div>
          </div>

          <button type={"submit"}>
            <span> Enviar! </span>
          </button>
        </form>

        <div>
          <span>Resumen</span>
          {cart.map((it) => {
            return (
              <div key={it.id}>
                <p>
                  <span>
                    {it.nombre} X{it.cantidad}
                  </span>
                </p>
                <p>Subtotal: ${it.precio * it.cantidad}</p>
              </div>
            );
          })}
          <p>
            <span>Total: ${total}</span> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;