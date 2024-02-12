// import React from 'react'

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <h3>Not Found</h3>
      <h3>
        <Link to={"/"}>Home</Link>
      </h3>
    </div>
  );
};

export default ErrorPage;
