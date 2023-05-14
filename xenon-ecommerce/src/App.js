import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { AddProduct } from './Components/AddProduct';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
