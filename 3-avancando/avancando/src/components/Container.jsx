// import React from 'react'

const Container = ({ children }) => {
  return (
    <div>
      <h1>Container</h1>
      {/* Elemento abraçado pelo componente */}
      <h3>{children}</h3>
    </div>
  );
};

export default Container;
