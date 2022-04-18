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


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
