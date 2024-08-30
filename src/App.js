import Navbar from './components/Navbar'
import Intro from './components/Intro'
import 'flowbite/dist/flowbite.min.css';
import About from './components/About';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import Product from './components/Product';
import Foots from './components/Footer';


import C1 from './components/Intro'
import './index.css';

function App() {
  return (
        <div>
          <Navbar />
          <Intro />
          <Categories />
          <Product />
          <About />
          <Reviews />
          <Foots />

        </div>
    
  

  );
}

export default App;
