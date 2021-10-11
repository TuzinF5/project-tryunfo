import React from 'react';

class Form extends React.Component {
  render() {
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
        </form>
      </section>
    );
  }
}

export default Form;
