import React, {useState, useEffect} from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
    .then(
      response => response.json()
    )
    .then(
      data => setBackendData(data)
    )
  }, []);
  
  return (
    <div>
      {
        (typeof backendData.numbers === 'undefined')?
        (<p>Loading...</p>):
        (backendData.numbers.map((number, i) => {
          return <h3 key={i}>{number}</h3>
        }))
      }
    </div>
  )
};

export default App;