import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

function BusinessCryptos() {
  const [businessCryptos, setBusinessCryptos] = useState([]);

  useEffect(() => {
    const fetchBusinessCryptos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/businesscrypto/');
        setBusinessCryptos(response.data);
      } catch (error) {
        console.error('Error fetching business cryptos:', error);
      }
    };

    fetchBusinessCryptos();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Business Cryptos</h1>
      <div className="row">
        {businessCryptos.map(crypto => (
          <div key={crypto.id} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Name: {crypto.name}</h3>
                <p className="card-text"><b>Symbol: </b>{crypto.symbol}</p>
                {/* Add other fields as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessCryptos;
