import React from 'react';
import PropTypes from 'prop-types';

class FilterCards extends React.Component {
  render() {
    const { nameFilter, onInputChange, disabledInput } = this.props;
    return (
      <label htmlFor="name-filter">
        <p>Filtre pelo nome da carta</p>
        <input
          type="text"
          name="nameFilter"
          id="name-filter"
          className="input"
          data-testid="name-filter"
          placeholder="Digite um nome"
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
