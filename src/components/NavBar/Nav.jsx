import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';

function Nav(props) {
  return (
    <nav className="bg-slate-400 flex flex-row items-center justify-between">
      <div>
        <a href=".">
          <img className="h-32 mt-5" src={logo} alt="Pippa&Co logo" />
        </a>
      </div>
      <div className="">
        <button className='bg-gray-200 px-4 py-1 m-10 rounded-full'>PRODUCTOS</button>
        <button className='bg-gray-200 px-4 py-1 m-10 rounded-full'>GUÍA DE TALLES</button>
        <button className='bg-gray-200 px-4 py-1 m-10 rounded-full'>NOSOTROS</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Nav;
