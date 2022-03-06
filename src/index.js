import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Products from "./routes/products";
import ProductDetail from "./routes/product_detail";
import Home from "./routes/home";
import { ProductProvider } from './context/ProductContext';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';
import Cart from './routes/cart';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>

          </Routes>
        </ProductProvider>
      </CartProvider>
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);