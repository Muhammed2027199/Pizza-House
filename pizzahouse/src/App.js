import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Aboutus from './Components/Aboutus/Aboutus';
import MenuPage from './Components/MenuPage/MenuPage';
import Cart from './Components/AddtoCart/Cart';
import Login from './Components/RegisterAndLogIn/Login';
import Register from './Components/RegisterAndLogIn/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Components/Contacts/Contatct'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Menu' element={<MenuPage/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/AddtoCart' element={<Cart/>}/>``
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/AddtoCart' element={<Cart/>}/>
          {/* <Route path='/AddtoCart' element={<Cart/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
    </div>

  );
}
export default App;
