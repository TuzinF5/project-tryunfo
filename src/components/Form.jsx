/* eslint-disable react/jsx-max-depth */
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
      <section id="form">
        <form>
          <p id="title-form">Criar carta</p>

          <div>
            <div className="div-inputs">
              <label htmlFor="name-input">
                <p>Nome</p>
                <input
                  type="text"
                  name="cardName"
                  id="name-input"
                  className="input"
                  data-testid="name-input"
                  placeholder="Digite um nome"
                  maxLength="16"
                  value={ cardName }
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className="div-inputs">
              <label htmlFor="description-input">
                <p>Descrição</p>
                <textarea
                  name="cardDescription"
                  id="description-input"
                  className="input"
                  data-testid="description-input"
                  placeholder="Digite uma descrição"
                  maxLength="336"
                  value={ cardDescription }
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className="div-inputs">
              <label htmlFor="attr1-input">
                <p>Inteligência</p>
                <input
                  type="number"
                  name="cardAttr1"
                  id="attr1-input"
                  className="input"
                  data-testid="attr1-input"
                  placeholder="Nível de inteligência"
                  max="100"
                  value={ cardAttr1 }
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className="div-inputs">
              <label htmlFor="attr2-input">
                <p>Habilidade</p>
                <input
                  type="number"
                  name="cardAttr2"
                  id="attr2-input"
                  className="input"
                  data-testid="attr2-input"
                  placeholder="Nível de habilidade"
                  max="100"
                  value={ cardAttr2 }
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className="div-inputs">
              <label htmlFor="attr3-input">
                <p>Defesa</p>
                <input
                  type="number"
                  name="cardAttr3"
                  id="attr3-input"
                  className="input"
                  data-testid="attr3-input"
                  placeholder="Nível de defesa"
                  max="100"
                  value={ cardAttr3 }
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className="div-inputs">
              <label htmlFor="image-input">
                <p>Imagem</p>
                <input
                  type="text"
                  name="cardImage"
                  id="image-input"
                  className="input"
                  data-testid="image-input"
                  placeholder="URL da imagem"
                  value={ cardImage }
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className="div-inputs">
              <label htmlFor="rare-input">
                <p>Raridade</p>
                <select
                  name="cardRare"
                  id="rare-input"
                  className="input"
                  data-testid="rare-input"
                  value={ cardRare }
                  onChange={ onInputChange }
                >
                  <option value="Normal">Normal</option>
                  <option value="Raro">Raro</option>
                  <option value="Muito raro">Muito raro</option>
                </select>
              </label>
            </div>

            <div className="div-inputs">
              {hasTrunfo ? (
                <p id="not-trunfo">
                  Você já tem um Super Trunfo em seu baralho
                </p>
              ) : (
                <label className="super-trunfo" htmlFor="trunfo-input">
                  <p>Super Trunfo</p>
                  <input
                    id="trunfo-input"
                    type="checkbox"
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )}
            </div>

            <div id="div-save-button" className="div-inputs">
              <button
                type="button"
                id="save-button"
                data-testid="save-button"
                disabled={ isSaveButtonDisabled }
                onClick={ onSaveButtonClick }
              >
                Salvar
              </button>
            </div>
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
  cardTrunfo: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
