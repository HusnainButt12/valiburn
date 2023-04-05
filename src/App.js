import logo from './logo.svg';
import './App.css';
import NavBar from './Component/CommonComponent/NavBar/NavBar';
import VapeProduct from './Component/HomePage/VapeProduct/VapeProduct';
import Images from './Component/HomePage/VapeProduct/Images/Images';
import VaporBody from './Component/HomePage/VapeProduct/VaporBody/VaporBody';
import Product from './Component/HomePage/Products/Product';
import OurProducts from './Component/HomePage/Our Products/OurProducts';
import Category from './Component/HomePage/Category/Category';
import ReliableCompany from './Component/HomePage/Reliable Company/ReliableCompany';
import Benefits from './Component/HomePage/Benefits/Benefits';
import GetStart from './Component/HomePage/Get Started/GetStart';
import Reviews from './Component/HomePage/Reviews/Reviews';
import Articles from './Component/HomePage/Articles/Articles';
import Footer from './Component/CommonComponent/NavBar/Footer/Footer';





function App() {
  return (
    <div className="App">
     <NavBar/>
     <VapeProduct/>
     <Images/>
     <VaporBody/>
     <Product/>
     <OurProducts/>
     <Category/>
     <ReliableCompany/>
     <Benefits/>
     <GetStart/>
     <Reviews/>
     <Articles/>
     <Footer/>
     
    </div>
  );
}

export default App;
