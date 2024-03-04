import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  value: string;
  setData: (value: string) => void;
}

function ChildComponent({ value, setData }: Props) {
  const handleClick = () => {
    const newData = "from Child to Parent";
    setData(newData);
  };

  return (
    <div className='Child'>
      <h3>I have a message: {value}</h3>
      <Button variant="secondary" onClick={handleClick}>Child Button</Button>
    </div>
  );
}

export default ChildComponent;