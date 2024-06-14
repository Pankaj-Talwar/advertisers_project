import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS file

function AdSpends() {
  const [adSpends, setAdSpends] = useState([]);

  useEffect(() => {
    const fetchAdSpends = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/adspend/');
        setAdSpends(response.data);
      } catch (error) {
        console.error('Error fetching ad spends:', error);
      }
    };

    fetchAdSpends();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ad Spends</h1>
      <div className="row">
        {adSpends.map(adSpend => (
          <div key={adSpend.id} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title">{adSpend.name}</h3>
                <p className="card-text"><b>Amount: </b>{adSpend.amount}</p>
                <p className="card-text"><b>Date:</b> {adSpend.date}</p>
                {/* Add other fields as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdSpends;
