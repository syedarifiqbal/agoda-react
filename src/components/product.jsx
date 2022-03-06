import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return <div className='col-md-4 mb-4'>
        <Link to={`/products/${product.id}`} className="text-decoration-none">
            <div className="card">
                <img src={product.avatar} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h5>{product.name}</h5>
                    {/* <p class="card-text"></p> */}
                    <p className="price">${product.price}</p>
                </div>
            </div>
        </Link>
    </div>
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

export default Product;