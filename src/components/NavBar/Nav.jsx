import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="bg-slate-400 flex flex-row items-center justify-between">
      <div>
        <Link to='/'>
          <img className="h-32 mt-5" src={logo} alt="Pippa&Co logo" />
        </Link>
      </div>
      <div className="">
        <NavLink to={`/categoria/Cuchas`} className='bg-gray-200 px-4 py-1 m-10 rounded-full'>Cuchas</NavLink>
        <NavLink to={`/categoria/Collares`} className='bg-gray-200 px-4 py-1 m-10 rounded-full'>Collares</NavLink>
        <NavLink to={`/categoria/Pretales`} className='bg-gray-200 px-4 py-1 m-10 rounded-full'>Pretales</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Nav;
