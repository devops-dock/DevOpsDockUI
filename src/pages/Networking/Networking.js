// src/pages/Networking/Networking.js

import React, { useState } from 'react';
import './Networking.css';

function Networking() {
  const [ipAddress, setIpAddress] = useState('');
  const [cidr, setCidr] = useState('');
  const [error, setError] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/cidr/calculate-cidr', {
        method: 'POST',
        body: JSON.stringify({ cidr: ipAddress }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('Error response:', errorResponse);
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(data);
      setCidr(data.result);
      setError('');
    } catch (err) {
      setError(err.message);
      setCidr('');
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter CIDR:
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="output-box">
        {apiResponse && (
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};


export default Networking;
