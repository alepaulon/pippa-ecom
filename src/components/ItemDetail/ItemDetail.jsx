import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, categoria, descripcion, img, precio, stock}) => {
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
            <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada: ',cantidad)} />
        </footer>
    </article>
    </div>
  )
}

export default ItemDetail