import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';

function Nav(props) {
  return (
    <nav className="bg-slate-400 flex flex-row items-center justify-between">
      <div>
        <a href=".">
          <img className="h-32" src={logo} alt="Pippa&Co logo" />
        </a>
      </div>
      <div className="">
        <button>Productos</button>
        <button>Nosotros</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Nav;
