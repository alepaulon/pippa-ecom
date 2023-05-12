import React from 'react'
import cuchas from "./img/cuchas.png"
import collares from "./img/collares.png"
import pretales from "./img/pretales.png"
import todo from "./img/todo.png"
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="bg-[#faeee7] border-4 border-[#fffffe] rounded-lg py-4 px-3">
        <div className='grid grid-rows-2 grid-cols-3 gap-2 justify-items-center items-center'> 
            <Link to='/categoria/Cuchas' className='rounded-xl row-span-2 relative overflow-hidden'>
                    <img src={cuchas} className='rounded-xl object-cover transform transition-transform ease-in-out duration-500 hover:rotate-6 hover:scale-110 hover:opacity-90' alt="Sección cuchas para perro" />
                    <h1 className='absolute text-7xl font-semibold text-[#ff537b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ease-in-out duration-500 hover:scale-110'>Cuchas</h1>
            </Link>
            <Link to='/categoria/Collares' className='rounded-xl col-start-2 pr-1 relative overflow-hidden'>
                    <img src={collares} className='rounded-xl object-cover transform transition-transform ease-in-out duration-500 hover:rotate-6 hover:scale-110 hover:opacity-90' alt="Sección collares para perro" />
                    <h1 className='absolute text-7xl font-semibold text-[#ff537b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ease-in-out duration-500 hover:scale-110'>Collares</h1>
            </Link>
            <Link to='/categoria/Pretales' className='rounded-xl col-start-3 row-start-1 pl-1 relative overflow-hidden'>
                    <img src={pretales} className='rounded-xl object-cover transform transition-transform ease-in-out duration-500 hover:rotate-6 hover:scale-110 hover:opacity-90' alt="Sección pretales para perro" />
                    <h1 className='absolute text-7xl font-semibold text-[#ff537b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ease-in-out duration-500 hover:scale-110'>Pretales</h1>
            </Link>
            <Link to='/productos' className='rounded-xl col-start-2 row-start-2 col-span-2 pt-4 relative overflow-hidden'>
                    <img src={todo} className='rounded-xl object-cover transform transition-transform ease-in-out duration-500 hover:rotate-2 hover:scale-110 hover:opacity-90' alt="Sección todo para perros" />
                    <h1 className='absolute text-7xl font-semibold text-[#ff537b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transform ease-in-out duration-500 hover:scale-110'>Todos los productos</h1>
            </Link>
        </div>
    </div>
  )
}

export default Homepage