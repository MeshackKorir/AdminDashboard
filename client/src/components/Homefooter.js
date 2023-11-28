import React from 'react';
import "./Homefooter.css";

const Homefooter = () => {
  return (
    <div className='total'>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Transportation</h4>
            <ul className="links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Fleet</a></li>
              <li><a href="#">Routes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="links">
              <li><a href="#">Join Us</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for updates on transportation services, routes, and exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homefooter;
