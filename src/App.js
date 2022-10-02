import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CheckOut from './components/pages/CheckOut/CheckOut';
import Login from './components/Login/Login';
import About from './components/pages/About/About';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Gallery from './components/pages/Gallery/Gallery';
import Register from './components/Login/Register';
import Header from './components/SharedPage/Header/Header';
import NotFound from './components/SharedPage/NotFound/NotFound';
import Footer from './components/SharedPage/Footer/Footer';
import RequireAuth from './components/SharedPage/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/gallery' element={<Gallery></Gallery>} ></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>} >
        </Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
