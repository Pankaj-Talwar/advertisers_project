import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Import the generic CSS file

function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/locations/');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Locations</h1>
      <div className="row">
        {locations.map(location => (
          <div key={location.id} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">Advertiser: {location.advertiser ? location.advertiser.name : 'Unknown'}</h3>
                <p className="card-text"><b>Latitude:</b> {location.latitude}</p>
                <p className="card-text"><b>Longitude: </b>{location.longitude}</p>
                <p className="card-text"><b>Address:</b> {location.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
