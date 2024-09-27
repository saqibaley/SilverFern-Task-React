import React from 'react';
import './App.css';
import carImage from './images/carIcon.png';
import vanImage from './images/vanIcon.png';
import busImage from './images/busIcon.png';
import lightImage from './images/lightMachinery.png';
import heavyImage from './images/heavyMachinery.png';
import bikeImage from './images/bikeIcon.png';



function App() {
  return (
    <div className="App">
      <navbar className="navbar">
        <div className="navbar-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#courses" className="nav-item">Courses</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#investors" className="nav-item">For Investors</a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="navbar-actions">
          <span className="balance">2.94 AED +0.00%</span>
          <button className="nav-button">Register or Log in</button>
        </div>
      </navbar>

      <div className='cardSetion'>
        <div className='sectionHeading'>
          <h3>Our Courses</h3>
        </div>

        <div className='cards'>
          <div className="card">
            <div className="icon"><img src={carImage} alt="Light Vehicle" /></div>
            <div className="label">Light Vehicle</div>
          </div>

          <div className="card">
            <div className="icon"><img src={vanImage} alt="Light Vehicle" /></div>
            <div className="label">Light Vehicle</div>
          </div>

          <div className="card">
            <div className="icon"><img src={busImage} alt="Light Vehicle" /></div>
            <div className="label">Light Vehicle</div>
          </div>

          <div className="card">
            <div className="icon"><img src={lightImage} alt="Light Vehicle" /></div>
            <div className="label">Light Vehicle</div>
          </div>

          <div className="card">
            <div className="icon"><img src={heavyImage} alt="Light Vehicle" /></div>
            <div className="label">Light Vehicle</div>
          </div>

          <div className="card">
            <div className="icon"><img src={bikeImage} alt="Light Vehicle" /></div>
            <div className="label">Light Vehicle</div>
          </div>
        </div>

      </div>

      <div className="financialCards">
        <div className="innerCard">
          <div className="title">Revenue</div>
          <div className='profitContainer'>
            <div className="value">
              <h3>365M</h3>
              <span>AED</span>
            </div>
            <div className="percentageText">
              <p className='text'>5%</p>
              <span className="arrow">&#x25B2;</span>
            </div>
          </div>
        </div>

        <div className="innerCard">
          <div className="title">Net Profit</div>
          <div className='profitContainer'>
            <div className="value">
              <h3>365M</h3>
              <span>AED</span>
            </div>
            <div className="percentageText">
              <p className='text'>5%</p>
              <span className="arrow">&#x25B2;</span>
            </div>
          </div>
        </div>

        <div className="innerCard">
          <div className="title">Total assets</div>
          <div className='profitContainer'>
            <div className="value">
              <h3>365M</h3>
              <span>AED</span>
            </div>
            <div className="percentageText">
              <p className='text'>5%</p>
              <span className="arrow">&#x25B2;</span>
            </div>
          </div>
        </div>

        <div className="innerCard">
          <div className="title">Total Equity</div>
          <div className='profitContainer'>
            <div className="value">
              <h3>365M</h3>
              <span>AED</span>
            </div>
            <div className="percentageText">
              <p className='text'>5%</p>
              <span className="arrow">&#x25B2;</span>
            </div>
          </div>
        </div>

        <div className="innerCard">
          <div className="title">Market CAP</div>
          <div className='profitContainer'>
            <div className="value">
              <h3>365M</h3>
              <span>AED</span>
            </div>
            <div className="percentageText">
              <p className='text'>5%</p>
              <span className="arrow">&#x25B2;</span>
            </div>
          </div>
        </div>

        <div className="innerCard">
          <div className="title">Market CAP</div>
          <div className='profitContainer'>
            <div className="value">
              <h3>365M</h3>
              <span>AED</span>
            </div>
            <div className="percentageText">
              <p className='text'>5%</p>
              <span className="arrow">&#x25B2;</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
