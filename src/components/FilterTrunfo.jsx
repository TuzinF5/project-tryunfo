import React from 'react';
import PropTypes from 'prop-types';

class FilterTrunfo extends React.Component {
  render() {
    const { checkedTrunfo, validationChecked } = this.props;
    return (
      <label htmlFor="trunfo-filter">
        <input
          type="checkbox"
          name="trunfoFilter"
          id="trunfo-filter"
          data-testid="trunfo-filter"
          checked={ checkedTrunfo }
          onChange={ validationChecked }
        />
        Super Trunfo
      </label>
    );
  }
}

FilterTrunfo.propTypes = {
  checkedTrunfo: PropTypes.bool.isRequired,
  validationChecked: PropTypes.func.isRequired,
};

export default FilterTrunfo;
