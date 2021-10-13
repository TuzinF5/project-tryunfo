import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardList, nameFilter, deleteCard } = this.props;
    return (
      <div>
        {cardList.filter((card) => card.cardName.includes(nameFilter)).map((card) => ( // Link onde vi oque eu precisava para fazer a vericação necessária do requisito 10 => https://github.com/tryber/sd-013-a-project-tryunfo-beta/pull/18/commits/78271c4a6ead792ccf456af1f1761d897efa75dc#:~:text=))%7D-,%7BcardList,.filter((card)%20%3D%3E%20card.cardName.includes(filterName)),-.map((card%2C%20i

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
  nameFilter: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
