import React from 'react';
import PropTypes from 'prop-types';

class RarityFilter extends React.Component {
  render() {
    const { rareFilter, onInputChange, disabledInput } = this.props;
    return (
      <label htmlFor="rare-filter">
        <p>Filtre por raridade da carta</p>
        <select
          name="rareFilter"
          id="rare-filter"
          className="input"
          data-testid="rare-filter"
          value={ rareFilter }
          onChange={ onInputChange }
          disabled={ disabledInput }
        >
          <option value="Todas">Todas</option>
          <option value="Normal">Normal</option>
          <option value="Raro">Raro</option>
          <option value="Muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

RarityFilter.propTypes = {
  rareFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disabledInput: PropTypes.bool.isRequired,
};

export default RarityFilter;
