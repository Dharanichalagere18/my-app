import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import Button from 'react-bootstrap/Button';

function ParentComponent() {
  const [data, setData] = useState(""); 

  const handleClick = () => {
    const newData = "from Parent to Child";
    setData(newData);
  };

  return (
    <div className='Parent'>
      <div className="center-container">
        <Button variant="primary" onClick={handleClick} size="lg">Parent Button</Button>
      </div>
      <ChildComponent value={data} setData={setData} />
    </div>
  );
}

export default ParentComponent;