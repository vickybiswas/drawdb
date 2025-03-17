import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const DrawDbComponent = dynamic(() => import('../components/DrawDbComponent'), { ssr: false });

const HomePage = () => {
  const [data, setData] = useState(null);

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Sample React Next.js Project with Shadcn</h1>
      <DrawDbComponent onDataChange={handleDataChange} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
