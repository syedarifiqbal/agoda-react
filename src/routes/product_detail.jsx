import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import ProductContext from "../context/ProductContext";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function ProductDetail() {
    const {id} = useParams();
    const { fetchProductById, selectedProduct } = useContext(ProductContext);
    const [quantity, setQuantity] = useState(1);
    const { addToCart, addingProductToCart } = useContext(CartContext);

    useEffect(() => {
        fetchProductById(id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (selectedProduct? <div className="mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={selectedProduct.avatar} alt={selectedProduct.name} className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h4>{selectedProduct.category}</h4>
                <h2 className="mb-3">{selectedProduct.name}</h2>
                <h3 className="mb-3">${selectedProduct.price}</h3>
                <div className="row">
                    <div className="col-md-6">
                        <input type="number" name="quantity" onChange={(e)=> setQuantity(e.target.value)} value={quantity}/>                        
                    </div>
                    <div className="col-md-6">
                        {addingProductToCart? 
                        <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faSpinner} spin  /></button>
                        :<button type="button" className="btn btn-primary" onClick={() => addToCart(selectedProduct, quantity)}>ADD TO CART</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> : <p>Loading...</p>);
}
