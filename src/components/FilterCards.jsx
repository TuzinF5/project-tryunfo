import React from 'react';
import PropTypes from 'prop-types';

class FilterCards extends React.Component {
  render() {
    const { nameFilter, onInputChange } = this.props;
    return (
      <label htmlFor="name-filter">
        Filtre pelo nome da carta
        <input
          type="text"
          name="nameFilter"
          id="name-filter"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

FilterCards.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FilterCards;
