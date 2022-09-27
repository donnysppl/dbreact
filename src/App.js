import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Support from "./Pages/Support";
import Services from "./Pages/Services";
import Warranty from "./Pages/Warranty";
import Error from "./Pages/Error";
import Product from './Pages/Product';
import Product_detail from './Pages/Product_detail';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
            <Route path="about" element={ <About/> } />
            <Route path="support" element={ <Support/> } />
            <Route path="services" element={ <Services/> } />
            <Route path="warranty-information" element={ <Warranty/> } />
            <Route path="product" element={ <Product/> } />
            <Route path="product-detail" element={ <Product_detail/> } />
            <Route path="*" element={ <Error/> } />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
