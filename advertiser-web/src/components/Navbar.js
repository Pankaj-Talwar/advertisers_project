import React from 'react';
import logo from './logo.png'; // Import your logo image

const Navbar = ({ page, setPage }) => {
  const navItemStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    display: 'block',
    textAlign: 'center',
  };

  const activeStyle = {
    backgroundColor: '#007bff',
  };

  return (
    <nav style={{ backgroundColor: '#343a40', width: '200px', height: '100%', paddingTop: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '05px' }}>
        <img src={logo} alt="Logo" style={{ width: '180px', height: 'auto' }} />
      </div>
      <a href="#advertisers" style={{ ...navItemStyle, ...(page === 'advertisers' && activeStyle) }} onClick={() => setPage('advertisers')}>
        <i className="fas fa-bullhorn" style={{ marginRight: '10px' }}></i> Advertisers
      </a>
      <a href="#locations" style={{ ...navItemStyle, ...(page === 'locations' && activeStyle) }} onClick={() => setPage('locations')}>
        <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i> Locations
      </a>
      <a href="#adSpends" style={{ ...navItemStyle, ...(page === 'adSpends' && activeStyle) }} onClick={() => setPage('adSpends')}>
        <i className="fas fa-chart-bar" style={{ marginRight: '10px' }}></i> Ad Spends
      </a>
      <a href="#businessCryptos" style={{ ...navItemStyle, ...(page === 'businessCryptos' && activeStyle) }} onClick={() => setPage('businessCryptos')}>
        <i className="fab fa-bitcoin" style={{ marginRight: '10px' }}></i> Business Cryptos
      </a>
    </nav>
  );
};

export default Navbar;
