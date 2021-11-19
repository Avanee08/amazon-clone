import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">

      <img
      className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>


    <div className="home__row">
     <Product id="12345"
      title="Redmi XiaoMi Band Smart Wristband Fitness Bracelet Multiple Face 1.08"
      price={999}
      rating={5}
      
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg">
        </Product>

        <Product id="12345"
      title="Bose Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, Black"
      price={999}
      rating={5}
      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24">
        </Product>
        
   </div>



   <div className="home__row">
     <Product id="1235445"
      title="Apple iPhone 11 [64GB, Purple] + Carrier Subscription [Cricket Wireless]"
      price={999}
      rating={5}

        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000">
        </Product>

        <Product id="34974897"
      title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)"
      price={999}
      rating={5}
      image="https://www.businessinsider.in/thumb/msid-86003253,width-640,resizemode-4/Master.jpg" >
        </Product>

        <Product id="8743438"
      title="June Rocking Chair With Blue Upholstery"
      price={999}
      rating={5}
      image="https://ii1.pepperfry.com/media/catalog/product/j/u/568x625/june-rocking-chair-with-blue-upholstery-by-trendsbee-june-rocking-chair-with-blue-upholstery-by-tren-lj8uy2.jpg">
        </Product>

    </div>

    <div>
      <Product id="2388348"
      title="Croma Fire TV 109cm (43 Inch) Ultra HD 4K LED Smart TV (3 Years Warranty, Alexa Voice Assistant Remote, CREL7366, Black)"
      price={999}
      rating={5}
      image="http://www.lgnewsroom.com/wp-content/uploads/2019/05/LG-8K-OLED-TV-001.jpg">
        </Product>
    </div>

       
     
      </div>
  );
}

export default Home;
