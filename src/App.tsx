import './App.css';

import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('/api/players')
      .then(response => {
        return response.json();
      })
      .then(data => console.log(data));
    }, []);
  
  return (
    <div></div>
  );
  
}

export default App;
