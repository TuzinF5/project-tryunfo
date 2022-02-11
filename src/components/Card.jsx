import React from 'react';
import PropTypes from 'prop-types';
import RickMorty from '../images/Rick-and-morty-black-white.png';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      card,
      cardList,
    } = this.props;
    const result = cardList.filter((cardT) => cardT.cardTrunfo === true);
    return (
      <section id={ card }>
        <div id="cartao-preview">
          <p id="name-card" data-testid="name-card" value={ cardName }>
            {cardName}
          </p>
          <div id="div-image">
            <img
              id="image-card"
              data-testid="image-card"
              src={ cardImage.length < 1 ? RickMorty : cardImage }
              alt={ cardName }
            />
          </div>
          <p id="description-card" data-testid="description-card">
            {cardDescription}
          </p>
          <div id="div-attrs">
            <p className="chave" data-testid="attr1-card">
              Inteligência
              {cardAttr1.length > 0 && `___${cardAttr1}`}
            </p>
            <p className="chave" data-testid="attr2-card">
              Habilidade
              {cardAttr2.length > 0 && `___${cardAttr2}`}
            </p>
            <p className="chave" data-testid="attr3-card">
              Defesa
              {cardAttr3.length > 0 && `___${cardAttr3}`}
            </p>
          </div>
          <div id="raridades">
            <p data-testid="rare-card">{cardRare}</p>
            {cardTrunfo && result.length === 0 ? (
              <p data-testid="trunfo-card" id="trunfo-card">
                Super Trunfo
              </p>
            ) : (
              <p id="trunfo-card"> </p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

Card.defaultProps = {
  card: '',
  cardTrunfo: '',
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardList: [],
};

Card.propTypes = {
  card: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardList: PropTypes.arrayOf(PropTypes.object),
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Card;
