/** @format */

import React from 'react';

const CreatePlankList = ({items, listName}) => {
  return (
    <div>
      <h6>{listName}</h6>
      <p>{items}</p>
    </div>
  );
};

export default CreatePlankList;
