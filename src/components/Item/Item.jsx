import { Link } from "react-router-dom"

const Item = ({id, nombre, categoria, img, precio, stock}) => {

  return (
    <article className="bg-[#ffc6c7] border-2 border-[#fffffe] m-10 p-4 rounded-lg flex flex-col text-center w-72">
        <header>
            <h2 className="font-bold text-2xl text-[#33272a]">{nombre}</h2>
        </header>
        <picture>
            <img className="p-12" src={img} alt={nombre} />
        </picture>
        <section>
            <p className="font-bold text-lg mb-4 text-[#33272a]">${precio}</p>
        </section>
        <footer className="m-4">
            <Link to={`/item/${id}`} className="bg-[#ff8ba7] text-white transition duration-300 ease-in-out hover:bg-[#faeee7] hover:text-[#33272a] rounded-full  font-semibold px-4 py-2 m-4">Ver detalle</Link>
        </footer>
    </article>
  )
}

export default Item