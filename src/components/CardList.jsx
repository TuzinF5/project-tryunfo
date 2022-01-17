import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  assembleDiv(card, deleteCard) {
    return (
      <div className="list" key={ card.cardName }>
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
        <div id="div-button">
          <button
            id="button-remove"
            type="button"
            className={ card.cardName }
            data-testid="delete-button"
            onClick={ deleteCard }
          >
            Excluir
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { cardList, nameFilter, rareFilter, checkedTrunfo, deleteCard } = this.props;
    return (
      <section id="cardList">
        {cardList > 0 || checkedTrunfo === true
          ? cardList
            .filter((card) => card.cardTrunfo === true)
            .map(
              (
                card, // Link onde vi oque eu precisava para fazer a vericação necessária do requisito 10 => https://github.com/tryber/sd-013-a-project-tryunfo-beta/pull/18/commits/78271c4a6ead792ccf456af1f1761d897efa75dc#:~:text=))%7D-,%7BcardList,.filter((card)%20%3D%3E%20card.cardName.includes(filterName)),-.map((card%2C%20i
              ) => this.assembleDiv(card, deleteCard),
            )
          : cardList
            .filter((card) => card.cardName.includes(nameFilter.toLowerCase()))
            .filter(
              (card) => card.cardRare === rareFilter || rareFilter === 'Todas',
            )
            .map(
              (
                card, // Link onde vi oque eu precisava para fazer a vericação necessária do requisito 10 => https://github.com/tryber/sd-013-a-project-tryunfo-beta/pull/18/commits/78271c4a6ead792ccf456af1f1761d897efa75dc#:~:text=))%7D-,%7BcardList,.filter((card)%20%3D%3E%20card.cardName.includes(filterName)),-.map((card%2C%20i
              ) => this.assembleDiv(card, deleteCard),
            )}
      </section>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  rareFilter: PropTypes.string.isRequired,
  checkedTrunfo: PropTypes.bool.isRequired,
  nameFilter: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
