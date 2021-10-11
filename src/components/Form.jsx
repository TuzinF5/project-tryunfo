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
                name="cardName"
                id="name-input"
                data-testid="name-input"
                required
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="description-input">
              Descrição
              <textarea
                name="cardDescription"
                id="description-input"
                data-testid="description-input"
                required
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr1-input">
              Primeiro atributo
              <input
                type="number"
                name="cardAttr1"
                id="attr1-input"
                data-testid="attr1-input"
                max="90"
                min="0"
                required
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr2-input">
              Segundo atributo
              <input
                type="number"
                name="cardAttr2"
                id="attr2-input"
                data-testid="attr2-input"
                max="90"
                min="0"
                required
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="attr3-input">
              Terceiro atributo
              <input
                type="number"
                name="cardAttr3"
                id="attr3-input"
                data-testid="attr3-input"
                max="90"
                min="0"
                required
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div>
            <label htmlFor="image-input">
              Imagem
              <input
                type="text"
                name="cardImage"
                id="image-input"
                data-testid="image-input"
                required
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <label htmlFor="rare-input">
            Raridade
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              required
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value=""> </option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <div>
            <label htmlFor="trunfo-input">
              <input
                type="checkbox"
                name="cardTrunfo"
                id="trunfo-input"
                data-testid="trunfo-input"
                required
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trunfo
            </label>
          </div>

          <div>
            <button
              type="submit"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
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
