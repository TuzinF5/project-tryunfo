import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardList, deleteCard } = this.props;
    return (
      <div>
        {cardList.length > 0
        && cardList.map((card) => (
          <div className={ card.cardName } key={ card.cardName }>
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              className={ card.cardName }
              data-testid="delete-button"
              onClick={ deleteCard }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
