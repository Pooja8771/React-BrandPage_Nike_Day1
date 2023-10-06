const HeroSection = () => {
  return (
    <main className="Hero container">
      <div className="hero-content">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>
          Experience the ultimate footwear pleasure with our premium quality
          products .Your foot deserves the best product .
        </p>
        <div className="hero-button">
            <button> Shop Now</button>
            <button className="secondary-button"> Category</button>
        </div>
        <div className="shopping">
         <p> Also Available on</p>
         <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart"/>
            <img src="/images/amazon.png" alt="amazon"/>

         </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/images/shoes.avif" alt="shoe-image"/>
      </div>
    </main>
  );
};

export default HeroSection;
