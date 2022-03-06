import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartRow from "../components/cart_row";
import CartContext from "../context/CartContext";

export default function Cart() {

    const { cart } = useContext(CartContext);

    return (<div className="container">
        <div className="row">
            <div className="align-items-center d-flex justify-content-between">
                <h1 className="my-4">Your Cart</h1>
                <NavLink to="/products">Continue Shopping</NavLink>
            </div>
            <div className="col-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.length>0?
                            cart.items.map( p => <CartRow key={p.id} product={p}/>)
                            : <tr>
                                <td colSpan={5} className="text-center">
                                    Not Product in cart. &nbsp; 
                                    <NavLink to="/products">Go to Home</NavLink>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    </div>);
}
