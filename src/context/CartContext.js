import {createContext, useState} from  'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    let cartData = {
        total: 0,
        items: [],
        discount: 0,
        shipping: 0,
    };
    
    cartData = Object.assign(cartData, JSON.parse(localStorage.getItem('cartData')));
    
    const [cart, setCart] = useState(cartData);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [addingProductToCart, setAddingProductToCart] = useState(false);
    
    const addToCart = (product, quantity) => {
        setAddingProductToCart(true); // we can use AppContext here but as you mentioned that to show a preloader inside a button so that's why i am not dealing with global preloader instead i make seperate loader for the cart only.
        setTimeout(() => { // using timeout just to emulate the loader in add to cart button.
            const items = cartData.items;
            const existProductIndex = items.findIndex(p => p.id === product.id);
            if(existProductIndex >= 0){
                // Meaning we already have this item in card and need to update the product quantity
                items[existProductIndex].quantity += parseInt(quantity);
            }else{
                items.push({...product, quantity, priceUpdating: false})
            }
            const modifiedCartData = {
                ...cartData,
                items
            };
            setCart(modifiedCartData);
            localStorage.setItem('cartData', JSON.stringify(modifiedCartData))
            setAddingProductToCart(false);
            setShowCartPopup(true);
        }, 2000);
    }
    
    const changeQuantity = (product, quantity) => {
        const items = cartData.items;
        const productIndex = items.findIndex(p => p.id === product.id);
        items[productIndex].priceUpdating = true;
        setCart({...cartData, items});
        setTimeout(() => { // using timeout just to emulate the loader in add to cart button.
            items[productIndex].quantity = parseInt(quantity);
            items[productIndex].priceUpdating = false;
            const modifiedCartData = {
                ...cartData,
                items
            };
            setCart(modifiedCartData);
            localStorage.setItem('cartData', JSON.stringify(modifiedCartData))
        }, 2000);
    }
    
    const deleteCartItem = (product) => {
        setAddingProductToCart(true); // we can use AppContext here but as you mentioned that to show a preloader inside a button so that's why i am not dealing with global preloader instead i make seperate loader for the cart only.
        setTimeout(() => { // using timeout just to emulate the loader in add to cart button.
            const items = cartData.items.filter(p => p.id !== product.id);
            
            const modifiedCartData = {
                ...cartData,
                items
            };
            setCart(modifiedCartData);
            localStorage.setItem('cartData', JSON.stringify(modifiedCartData))
            setAddingProductToCart(false);
        }, 2000);
    }

    const hideCartPopup = () => setShowCartPopup(false);

    return <CartContext.Provider value={{
        cart, 
        addToCart,
        showCartPopup,
        hideCartPopup,
        addingProductToCart,
        deleteCartItem,
        changeQuantity
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContext;
