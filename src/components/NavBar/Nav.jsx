import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="bg-[#faeee7] flex flex-row items-center justify-between border-t-4 border-x-4 border-[#fffffe] rounded-xl">
      <div>
        <Link to='/'>
          <img className="h-32 mt-5" src={logo} alt="Pippa&Co logo" />
        </Link>
      </div>
      <div className="">
        <NavLink to={`/categoria/Cuchas`} className="bg-[#faeee7] text-[#33272a] border-[#33272a] border-2 transition duration-300 ease-in-out hover:bg-[#ff8ba7] hover:text-white hover:border-white rounded-full  font-semibold px-4 py-2 m-4">Cuchas</NavLink>
        <NavLink to={`/categoria/Collares`} className="bg-[#faeee7] text-[#33272a] border-[#33272a] border-2 transition duration-300 ease-in-out hover:bg-[#ff8ba7] hover:text-white hover:border-white rounded-full  font-semibold px-4 py-2 m-4">Collares</NavLink>
        <NavLink to={`/categoria/Pretales`} className="bg-[#faeee7] text-[#33272a] border-[#33272a] border-2 transition duration-300 ease-in-out hover:bg-[#ff8ba7] hover:text-white hover:border-white rounded-full  font-semibold px-4 py-2 m-4">Pretales</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Nav;
