
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import Orders from './Component/Orders/Orders';
import Products from './Component/Products/Products';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
