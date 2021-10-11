import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section>
        <form>
          <div>
            <label htmlFor="name-input">
              Nome
              <input
                type="text"
                name="name-input"
                id="name-input"
                data-testid="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="description-input">
              Descrição
              <textarea
                name="description-input"
                id="description-input"
                data-testid="description-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr1-input">
              Primeiro atributo
              <input
                type="number"
                name="attr1-input"
                id="attr1-input"
                data-testid="attr1-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr2-input">
              Segundo atributo
              <input
                type="number"
                name="attr2-input"
                id="attr2-input"
                data-testid="attr2-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr3-input">
              Terceiro atributo
              <input
                type="number"
                name="attr3-input"
                id="attr3-input"
                data-testid="attr3-input"
              />
            </label>
          </div>

          <div>
            <label htmlFor="image-input">
              Imagem
              <input
                type="text"
                name="image-input"
                id="image-input"
                data-testid="image-input"
              />
            </label>
          </div>

          <label htmlFor="rare-input">
            Raridade
            <select name="rare-input" id="rare-input" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <div>
            <label htmlFor="trunfo-input">
              <input
                type="checkbox"
                name="trunfo-input"
                id="trunfo-input"
                data-testid="trunfo-input"
              />
              Super Trunfo
            </label>
          </div>

          <div>
            <button type="submit" data-testid="save-button">
              Salvar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
