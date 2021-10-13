import React from 'react';

class FilterCards extends React.Component {
  render() {
    return (
      <label htmlFor="name-filter">
        Filtre pelo nome da carta
        <input
          type="text"
          name="nameFilter"
          id="name-filter"
          data-testid="name-filter"
        />
      </label>
    );
  }
}

export default FilterCards;
