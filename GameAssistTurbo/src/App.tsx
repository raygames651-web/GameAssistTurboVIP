import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Pronto');

  const handleBoost = () => {
    setStatus('Otimizando...');
    setTimeout(() => setStatus('Turbo Ativo!'), 2000);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1a1a1a', color: 'white', height: '100vh' }}>
      <h1>Game Assist Turbo</h1>
      <div style={{ margin: '50px 0', padding: '20px', border: '2px solid #edff21' }}>
        <p>Status: {status}</p>
      </div>
      <button onClick={handleBoost} style={{ padding: '15px 30px', fontSize: '20px', backgroundColor: '#edff21', color: 'black', fontWeight: 'bold' }}>BOOST NOW</button>
    </div>
  );
}

export default App;
