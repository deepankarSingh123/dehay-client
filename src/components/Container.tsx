// src/components/Container.tsx
import React from 'react';
import '../css/Container.css';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
