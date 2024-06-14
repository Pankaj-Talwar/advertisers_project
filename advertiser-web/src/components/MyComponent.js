// // MyComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
    const [advertisers, setAdvertisers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/advertisers/');
                setAdvertisers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching advertisers:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading advertiser details...</p>
            ) : (
                <div>
                    <h2>Advertisers</h2>
                    <ul>
                        {advertisers.map(advertiser => (
                            <li key={advertiser.id}>
                                <p>Name: {advertiser.name}</p>
                                <p>Email: {advertiser.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MyComponent;

