import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';



function App() {
  

  return (
    <>
    <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header></Header>
      <h1 className="text-center bg-red-400 text-4xl py-4">Template for the TechBurger project</h1>
      <ProductList/>
      <Footer></Footer>
    
      </div>
    </>
  )
}

export default App;
