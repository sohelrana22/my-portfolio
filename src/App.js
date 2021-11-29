import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import Blogs from "./component/Blogs/Blogs";
import Footer from "./component/Footer/Footer";
import Skills from "./component/Skills/Skills";
import NotFound from "./component/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/home' element={<Home></Home>}></Route>
          <Route exact path='/about' element={<About></About>}></Route>
          <Route exact path='/services' element={<Services></Services>}></Route>
          <Route exact path='/projects' element={<Projects></Projects>}></Route>
          <Route exact path='/skills' element={<Skills></Skills>}></Route>
         <Route exact path='/contact' element={<Contact></Contact>}></Route>
          <Route exact path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<NotFound></NotFound>} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;