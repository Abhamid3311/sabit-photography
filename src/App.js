import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Gallery from './components/Gallery/Gallery';


function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
