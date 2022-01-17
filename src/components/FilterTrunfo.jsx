import React from 'react';
import PropTypes from 'prop-types';

class FilterTrunfo extends React.Component {
  render() {
    const { checkedTrunfo, validationChecked } = this.props;
    return (
      <label className="super-trunfo" htmlFor="trunfo-filter">
        <p>Super Trunfo</p>
        <input
          type="checkbox"
          name="trunfoFilter"
          id="trunfo-filter"
          data-testid="trunfo-filter"
          checked={ checkedTrunfo }
          onChange={ validationChecked }
        />
      </label>
    );
  }
}

FilterTrunfo.propTypes = {
  checkedTrunfo: PropTypes.bool.isRequired,
  validationChecked: PropTypes.func.isRequired,
};

export default FilterTrunfo;
