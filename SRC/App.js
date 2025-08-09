import React, { useState } from 'react';
import Menu from './Menu';
import './Menu.css';

function App() {
  const [pages, setPages] = useState(['الرئيسية']);

  const handleAdd = (type) => {
    const newPage = `صفحة ${pages.length + 1} - ${type}`;
    setPages([...pages, newPage]);
  };

  return (
    <div>
    
    <HamburgerMenu onAdd={handleAdd} />
    

      <Menu onAdd={handleAdd} />
      <div style={{ marginTop: '20px', padding: '10px' }}>
        {pages.map((page, index) => (
          <div key={index} style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
