  import { Carousel } from "flowbite-react";
  import './C1.css'
  import Carousel2 from '../assets/carousel2.jpg'
  import Carousel3 from '../assets/carousel3.jpg'
  import Carousel1 from '../assets/carousel1.jpg'
  function C1() {
    return (
      <div className="container" id="home">
<div className="mt-2 mb-20 min-h-screen-xl h-screen">
  <Carousel pauseOnHover>
    <img src={Carousel1} className="object-cover h-full w-full" alt="..." />
    <img src={Carousel2} className="object-cover h-full w-full" alt="..." />
    <img src={Carousel3} className="object-cover h-full w-full" alt="..." />
  </Carousel>
</div>

</div>


        );
      }  

  export default C1