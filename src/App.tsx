import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
    <>
    <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header></Header>
      <h1 className="text-center bg-red-400 text-4xl py-4">Template for the TechBurger project</h1>
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </main>
      <Footer/>
      </div>
    </>
    </BrowserRouter>
  )
}

export default App;
