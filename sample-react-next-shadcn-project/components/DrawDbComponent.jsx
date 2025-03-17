import React, { useState } from 'react';
import App from '../../src/App';

const DrawDbComponent = ({ onDataChange }) => {
  const [data, setData] = useState(null);

  const handleDataChange = (newData) => {
    setData(newData);
    if (onDataChange) {
      onDataChange(newData);
    }
  };

  return (
    <div>
      <App isComponentMode={true} onDataChange={handleDataChange} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DrawDbComponent;
