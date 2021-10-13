import React from 'react';
import PropTypes from 'prop-types';

class FilterCards extends React.Component {
  render() {
    const { nameFilter, onInputChange, disabledInput } = this.props;
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
          disabled={ disabledInput }
        />
      </label>
    );
  }
}

FilterCards.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disabledInput: PropTypes.bool.isRequired,
};

export default FilterCards;
