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
    this.dataValidation = this.dataValidation.bind(this);
  }

  onInputChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.dataValidation());
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
