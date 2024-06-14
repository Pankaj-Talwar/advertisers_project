import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Advertisers from './components/AdvertiserList';
import Locations from './components/LocationList';
import AdSpendList from './components/AdSpendList'; // Import the AdSpends component
import BusinessCryptos from './components/BusinessCryptoList'; // Import the AdSpends component

function App() {
  const [page, setPage] = useState('advertisers');

  const renderPage = () => {
    switch (page) {
      case 'advertisers':
        return <Advertisers />;
      case 'locations':
        return <Locations />;
      case 'adSpends': // Render the AdSpends component for Ad Spends page
        return <AdSpendList />;
      case 'businessCryptos': // Render the AdSpends component for Ad Spends page
        return <BusinessCryptos />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Navbar page={page} setPage={setPage} />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f8f9fa' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
