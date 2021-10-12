import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    // this.dataValidation = this.dataValidation.bind(this);
  }

  onInputChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.dataValidation()); // Link onde vi como eu precisava chamar minha função 'dataValidation()' => https://github.com/tryber/sd-013-a-project-tryunfo-beta/pull/20/commits/5c81b6008eb15e53c108061be34a89748bf1663c#:~:text=this.setState(%7B%20%5Bname%5D%3A%20value%20%7D%2C%20()%20%3D%3E%20this.buttonDisabled())%3B
    // Link onde precisei entender o porque o setState recebe dois parametros => https://blog.matheuscastiglioni.com.br/atualizando-estado-dos-componentes-no-react/
  }

  onSaveButtonClick() {}

  dataValidation() {
    const { cardName, cardDescription, cardImage } = this.state;
    if (cardName !== '' && cardDescription !== '' && cardImage !== '') {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    this.setState({
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const valueState = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ valueState.cardName }
          cardDescription={ valueState.cardDescription }
          cardAttr1={ valueState.cardAttr1 }
          cardAttr2={ valueState.cardAttr2 }
          cardAttr3={ valueState.cardAttr3 }
          cardImage={ valueState.cardImage }
          cardRare={ valueState.cardRare }
          cardTrunfo={ valueState.cardTrunfo }
          hasTrunfo={ valueState.hasTrunfo }
          isSaveButtonDisabled={ valueState.isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ valueState.cardName }
          cardDescription={ valueState.cardDescription }
          cardAttr1={ valueState.cardAttr1 }
          cardAttr2={ valueState.cardAttr2 }
          cardAttr3={ valueState.cardAttr3 }
          cardImage={ valueState.cardImage }
          cardRare={ valueState.cardRare }
          cardTrunfo={ valueState.cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
