import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";
import './TopNavigationBar.css'
const TopNavigationBar = () => {

    const { cart } = useContext(CartContext);

    const isActive = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

    return <header style={{ backgroundColor: 'gray' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" aria-current="page" to="/">Agoda Test</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <NavLink className={isActive} to="/products">Products</NavLink>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    {cart.items.length > 0 ? <span className="badge bg-primary">{cart.items.length}</span> : null}
                                </NavLink>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    </header>
}

export default TopNavigationBar;