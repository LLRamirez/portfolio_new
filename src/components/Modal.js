import React, { useState } from 'react';

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div>
          <h1>My Modal</h1>
          <p>Hello, this is a modal!</p>
          <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
};
