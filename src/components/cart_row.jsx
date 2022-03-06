import { faMinus, faPlus, faSpinner, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import PropTypes from 'prop-types'

const CartRow = ({ product }) => {

    const { deleteCartItem, changeQuantity } = useContext(CartContext);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    return (<tr className="align-middle text-center">
        <td>
            <FontAwesomeIcon onClick={() => window.confirm("Do you want to delete the product from cart?") ? deleteCartItem(product) : null} icon={faTrashAlt} color="red" size="xl" />
        </td>
        <td>
            <div className="d-flex align-items-center">
                <img width="150" src={product.avatar} alt="" />
                <p className="mb-0 mx-3">{product.name}</p>
            </div>
        </td>
        <td>
            ${product.price}
        </td>
        <td className="text-center">
            <div className="d-flex quantity-incrementor" style={{ width: "150px" }}>
                <button className="btn btn-flat" onClick={() => changeQuantity(product, product.quantity - 1)} type="button">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <input type="text" disabled value={product.quantity} style={{ width: "50px", border: 0, textAlign: 'center' }} />
                <button className="btn btn-flat" onClick={() => changeQuantity(product, product.quantity + 1)} type="button">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </td>
        <td>
            {product.priceUpdating ?
                <FontAwesomeIcon icon={faSpinner} spin />
                : <p className="price">{formatter.format(product.quantity * product.price)}</p>
            }
        </td>
    </tr>);
}

CartRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default CartRow;