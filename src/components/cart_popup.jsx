import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function CartPopup() {

    const { cart, showCartPopup, hideCartPopup } = useContext(CartContext);

    return (showCartPopup ? <div className="cart-popup-container">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <p>Item added to the cart</p>
                    <button type="button" className="btn btn-flat" onClick={hideCartPopup}>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                </div>
            </div>
            {cart.items.length > 0 ?
                <><div className="align-items-center my-5 row">
                    <div className="col-md-4">
                        <img src={cart.items[0].avatar} alt={cart.items[0].name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h3>{cart.items[0].name}</h3>
                    </div>
                </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-primary">
                            <NavLink to="/cart" onClick={hideCartPopup} className="text-white text-decoration-none">View My Cart ({cart.items.reduce((previousAmount, item) => previousAmount += parseInt(item.quantity), 0)})</NavLink>
                        </button>
                        <p onClick={hideCartPopup} className="text-decoration-underline text-center mb-0 mt-3">Continue Shopping...</p>
                    </div>
                </>
                : null}
        </div>
    </div> : null);
}
