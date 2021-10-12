import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  truthRender(props) {
    return <p>{props}</p>;
  }

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
    } = this.props;

    return (
      <section>
        <div>
          <p data-testid="name-card" value={ cardName }>
            {cardName}
          </p>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p data-testid="description-card">{cardDescription}</p>
          <p data-testid="attr1-card">{cardAttr1}</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
          <p data-testid="rare-card">{cardRare}</p>
          <div>
            {
              cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p> </p>
            }
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

export default Card;
