import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa-2">
      <input className="pa3 b--red bg-lightest-blue ma2" type="text" placeholder="Search heroes" onChange={searchChange} />
    </div>
  )
}

export default SearchBox;