import React from 'react';
import '../Home.css';

function Home() {
  const data = [
    {
      images: [
        "https://5.imimg.com/data5/JX/YA/GLADMIN-60568877/rail-cargo-services.png",
        "https://tourismteacher.com/wp-content/uploads/2020/08/aircraft-jet-landing-cloud-46148-1.jpeg",
        "https://media.istockphoto.com/id/1339057752/photo/a-large-container-cargo-ship-in-motion.jpg?s=612x612&w=0&k=20&c=l39VgVcB6NSmMjwAgS3nmZoZ-PEjEbGEnMFQEqHOOCg="
      ],
      titles: [
        "Train Transportation",
        "Air Transportation",
        "Ocean Transportation"
      ],
      descriptions: [
        "TransLogic offers a menu of supply chain solutions that can optimize the effectiveness of your product promotion and reduce the cost of packaging",
        "Thank you, Chicago!",
        "We love the Big Apple!"
      ]
    }
  ];

  return (
    <div className="landing-page-container">
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="8000">
        {/* Indicators */}
        <ol className="carousel-indicators">
          {data[0].images.map((image, index) => (
            <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
          ))}
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner">
          {data[0].images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
              <div className="carousel-caption d-none d-md-block">
                <h3>{data[0].titles[index]}</h3>
                <p dangerouslySetInnerHTML={{ __html: data[0].descriptions[index] }}></p>
              </div>
            </div>
          ))}
        </div>

        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
  );
}

export default Home;
