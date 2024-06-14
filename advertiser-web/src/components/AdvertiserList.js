import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

function Advertisers() {
  const [advertisers, setAdvertisers] = useState([]);

  useEffect(() => {
    const fetchAdvertisers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/advertisers/');
        setAdvertisers(response.data);
      } catch (error) {
        console.error('Error fetching advertisers:', error);
      }
    };

    fetchAdvertisers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Advertisers</h1>
      <div className="row">
        {advertisers.map(advertiser => (
          <div key={advertiser.id} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Name: {advertiser.name}</h3>
                <p className="card-text"><b>Email: </b>{advertiser.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advertisers;
