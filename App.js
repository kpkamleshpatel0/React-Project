import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Category from "./components/Category";
import Noida from "./components/Noida";
import Mumbai from "./components/Mumbai";
import Indore from "./components/Indore";
import Gurugram from "./components/Gurugram";
import Chip from "./components/Chip";
import Platfrom1 from "./components/Platform1";
import Electronics from "./components/Electronics";
import Mobile from "./components/Mobile";
import Laptop from "./components/Laptop";
import Dell from "./components/Dell";
import Lenovo from "./Lenovo";
import L1 from "./components/L1";
import L2 from "./components/L2";
import L3 from "./components/L3";
import Fashion from "./components/Fashion";
import Men from "./components/Men";
import Printer from "./components/Printer";
import Hp from "./components/Hp";
import Dellp from "./components/Dellp";
import Lenovop from "./components/Lenovop";
import Cart from "./Cart";
const App=()=>{
  return(
<main style={{backgroundColor:'lightblue', backgroundImage:'initial'}}>
  <Router>
    <Nav/>
    <section className="contianer">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="shopping" element={<Gallery/>}>
          <Route path="fashion" element={<Fashion/>}>
            <Route path="men" element={<Men/>}/>
          </Route>
          <Route path="electronic" element={<Electronics/>}>
            <Route path="printer" element={<Printer/>}>
              <Route path="hp" element={<Hp/>}/>
              <Route path="dellp" element={<Dellp/>}/>
              <Route path="lenovop" element={<Lenovop/>}/>
            </Route>
            <Route path="laptop" element={<Laptop/>}>
              <Route path="dell" element={<Dell/>}>
                <Route path="laptop1" element={<L1/>}/>
                <Route path="laptop2" element={<L2/>}/>
                <Route path="laptop3" element={<L3/>}/>
              </Route>
              <Route path="lenovo" element={<Lenovo/>}/>
            </Route>
          </Route>
          <Route path="mobile" element={<Mobile/>}/>
        </Route>
        <Route path="contact" element={<Contact/>}>
          <Route path="noida" element={<Noida/>}>
            <Route path="r1" element={<Chip/>}>
              <Route path="a1" element={<Platfrom1/>}/>
            </Route>
          </Route>
          <Route path="mumbai" element={<Mumbai/>}/>
          <Route path="gurugram" element={<Gurugram/>}/>
          <Route path="indore" element={<Indore/>}/>
        </Route>
        <Route path='category/:cname' element={<Category/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </section>
  </Router>
  
</main>
  )
  
  
}
export default App;