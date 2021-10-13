import React from 'react';

class RarityFilter extends React.Component {
  render() {
    return (
      <select
        name="rareFilter"
        id="rare-filter"
        data-testid="rare-filter"
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

export default RarityFilter;
