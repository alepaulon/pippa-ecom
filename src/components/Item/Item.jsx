
const Item = ({id, nombre, categoria, img, precio, stock}) => {

  return (
    <article className="bg-blue-50 m-10 p-4 rounded-lg flex flex-col text-center w-72">
        <header>
            <h2 className="font-bold text-2xl">{nombre}</h2>
        </header>
        <picture>
            <img className="p-12" src={img} alt={nombre} />
        </picture>
        <section>
            <p className="font-bold text-lg mb-4">${precio}</p>
        </section>
        <footer>
            <button className="bg-cyan-400 hover:bg-cyan-500 rounded-2xl text-white font-semibold px-4 py-2">Ver detalle</button>
        </footer>
    </article>
  )
}

export default Item