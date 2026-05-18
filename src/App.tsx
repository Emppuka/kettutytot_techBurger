import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import CartView from './views/CartView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from "./components/Toast";
import Checkout from './components/Checkout';

function App() {
  

  return (
    <BrowserRouter>
    <>
    <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header></Header>
      <h1 className="text-center bg-red-400 text-4xl py-6">TechBurgerMan</h1>
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path='/cart' element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Toast />
      </main>
      <Footer/>
      </div>
    </>
    </BrowserRouter>
  )
}

export default App;
