import React from 'react';
import { Redirect } from 'react-router';

const NotFound: React.SFC = () => {
  return (
    <Redirect to="/" />
  );
};

export default NotFound;
