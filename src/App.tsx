import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  

  return (
    <>
    <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header></Header>
      <h1 className="text-center bg-red-400 text-4xl py-4">Template for the TechBurger project</h1>
      <ProductCard></ProductCard>
      <Footer></Footer>
      <div><Modal></Modal></div>
      </div>
    </>
  )
}

export default App
