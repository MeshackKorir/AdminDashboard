// import React from 'react';
// import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Home() {
//   const data = [
//     {
//       images: [
//         'https://5.imimg.com/data5/JX/YA/GLADMIN-60568877/rail-cargo-services.png',
//         'https://tourismteacher.com/wp-content/uploads/2020/08/aircraft-jet-landing-cloud-46148-1.jpeg',
//         'https://media.istockphoto.com/id/1339057752/photo/a-large-container-cargo-ship-in-motion.jpg?s=612x612&w=0&k=20&c=l39VgVcB6NSmMjwAgS3nmZoZ-PEjEbGEnMFQEqHOOCg='
//       ],
//       titles: ['Train Transportation',
//                 'Air Transportation', 
//                 'Ocean Transportation'
//               ],
//       descriptions: [
//         'TransLogic offers a menu of supply chain solutions that can optimize the effectiveness of your product promotion and reduce the cost of packaging',
//         'Thank you, Chicago!',
//         'We love the Big Ocean!'
//       ]
//     }
//   ];

//   return (
//     <div className="landing-page-container">
//     <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="8000">
//       <div className="carousel-inner">
//         {data[0].images.map((image, index) => (
//           <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//             <div className="image-container">
//               <img src={image} className="d-block img w-100" alt={`Slide ${index}`} />
//               <div className="carousel-caption">
//                 <h3>{data[0].titles[index]}</h3>
//                 <p dangerouslySetInnerHTML={{ __html: data[0].descriptions[index] }}></p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
  
//       <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
     
//   </div>
  
//   );
// }

// export default Home;

import React from 'react'
import './Home.css';
import Homefooter from "./Homefooter"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" /> 



const Home = () => {
  return (
    <div className='home-container'>
      <div className='header'>
        <h1 className='blue'>Welcome to all network Transportation</h1>
      </div>
      <div class="card-list">
        <a href="#" class="card-item">
            <img src="https://thumbs.dreamstime.com/b/modern-freight-train-25364111.jpg" alt="Card Image"/>
            {/* <span class="developer">Developer</span> */}
            {/* <h3>A "developer" codes software and websites.</h3> */}
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src="https://tourismteacher.com/wp-content/uploads/2020/08/aircraft-jet-landing-cloud-46148-1.jpeg" alt="Card Image"/>
            {/* <span class="designer">Designer</span> */}
            {/* <h3>A "designer" is a design expert.</h3> */}
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src="https://media.istockphoto.com/id/1339057752/photo/a-large-container-cargo-ship-in-motion.jpg?s=612x612&w=0&k=20&c=l39VgVcB6NSmMjwAgS3nmZoZ-PEjEbGEnMFQEqHOOCg=" width="800px"/>
            {/* <span class="editor">Editor</span> */}
            {/* <h3>An "editor" ensures content quality and accuracy.</h3> */}
            <div class="arrow">
                <i class="fas fa-arrow-right card-icon"></i>
            </div>
        </a>
      </div>

      <Homefooter />
      
    </div>
  )
}

export default Home
