// import React from 'react'

const CarDatails = ({ brand, color, km, newCar }) => {
  return (
    <div>
      <h3>Detalhes do carro</h3>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo</p>}
    </div>
  );
};

export default CarDatails;
