import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, categoria, descripcion, img, precio, stock}) => {
  return (
    <div>
        <article>
        <header>
            <h2>{nombre}</h2>
        </header>
        <picture>
            <img src={img} alt={nombre} />
        </picture>
        <section>
            <p>
                Precio: ${precio}
            </p>
            <p>
                Categoría: {categoria}
            </p>
            <p>
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