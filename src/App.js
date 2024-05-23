import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Shop from './pages/Shop';
import Product from './pages/Product';
import Login from './pages/Login';
import Shopcategory from './pages/Shopcategory'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
function App() {
  return (
        <div className="App">
    
      <BrowserRouter>
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
     
        <Route path='/login' element={<Login/>}/>
        <Route path='/men' element={<Shopcategory category="men" banner={men_banner}/>}/>
        <Route path='/women' element={<Shopcategory category="women" banner={women_banner}/>}/>
        <Route path='/kids' element={<Shopcategory category="kid" banner={kids_banner}/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      </>
      </BrowserRouter>

    </div>
  );
}

export default App;
