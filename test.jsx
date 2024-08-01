import React from 'react';

const InsecureDataComponent = ({ user }) => {
  return <div>{user.name} - {user.email}</div>;
};
