import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardList } = this.props;
    return (
      <div>
        {cardList.length > 0
        && cardList.map((card, index) => (
          <Card
            key={ index }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
