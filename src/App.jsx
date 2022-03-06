import './App.css';
import Preloader from './components/preloader';
import TopNavigationBar from './components/TopNavigationBar';
import { Outlet } from 'react-router-dom';
import AppContext from './context/AppContext';
import { useContext } from 'react';
import CartPopup from './components/cart_popup';

export default function App() {
  const { isLoading } = useContext(AppContext)
  return (
    <>
      <Preloader show={isLoading} />
      <TopNavigationBar />
      <div className="container position-relative">
        <CartPopup />
        <Outlet />
      </div>
    </>
  );
}
