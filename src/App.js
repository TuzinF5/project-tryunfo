/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import FilterCards from './components/FilterCards';
import FilterTrunfo from './components/FilterTrunfo';
import Form from './components/Form';
import RarityFilter from './components/RarityFilter';
import './style.css';

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
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
      nameFilter: '',
      rareFilter: 'Todas',
      checkedTrunfo: false,
      disabledInput: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.inputValidation = this.inputValidation.bind(this);
    this.numericalInputValidation = this.numericalInputValidation.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.validationCardTrunfo = this.validationCardTrunfo.bind(this);
    this.validationChecked = this.validationChecked.bind(this);
  }

  onInputChange({ target: { name, value, type } }) {
    const { cardTrunfo } = this.state;
    this.setState({ [name]: value }, () => this.inputValidation()); // Link onde vi como eu precisava chamar minha função 'inputValidation()' => https://github.com/tryber/sd-013-a-project-tryunfo-beta/pull/20/commits/5c81b6008eb15e53c108061be34a89748bf1663c#:~:text=this.setState(%7B%20%5Bname%5D%3A%20value%20%7D%2C%20()%20%3D%3E%20this.buttonDisabled())%3B
    // Link onde precisei entender o porque o setState recebe dois parametros => https://blog.matheuscastiglioni.com.br/atualizando-estado-dos-componentes-no-react/
    if (type === 'checkbox') {
      if (cardTrunfo) {
        this.setState({
          cardTrunfo: false,
        });
      } else {
        this.setState({
          cardTrunfo: true,
        });
      }
    }
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;
    const result = this.validationCardTrunfo();
    if (cardTrunfo && result === undefined) {
      this.setState((prevState) => ({
        cardList: [{ cardName: cardName.toLowerCase(),
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo },
        ...prevState.cardList],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardRare: 'Normal',
        hasTrunfo: true,
        isSaveButtonDisabled: true,
      }));
    } else {
      this.setState((prevState) => ({
        cardList: [{ cardName: cardName.toLowerCase(),
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare },
        ...prevState.cardList],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardRare: 'Normal',
        isSaveButtonDisabled: true,
      }));
    }
  }

  validationCardTrunfo() {
    const { cardList } = this.state;
    const filtro = cardList.find((card) => card.cardTrunfo);
    return filtro;
  }

  numericalInputValidation() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maximumNumber = 100;
    const minimumNumber = 0;
    const maximumNumberOfSum = 300;
    const Attr1 = parseInt(cardAttr1, 10);
    const Attr2 = parseInt(cardAttr2, 10);
    const Attr3 = parseInt(cardAttr3, 10);
    const sumNumber = Attr1 + Attr2 + Attr3;
    if (Attr1 <= maximumNumber && Attr1 >= minimumNumber && Attr2 <= maximumNumber
      && Attr2 >= minimumNumber && Attr3 <= maximumNumber && Attr3 >= minimumNumber
      && sumNumber <= maximumNumberOfSum) {
      return true;
    } return false;
  }

  inputValidation() {
    const { cardName, cardDescription, cardImage } = this.state;
    const result = this.numericalInputValidation();
    if (cardName !== '' && cardDescription !== '' && cardImage !== '' && result) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    } this.setState({
      isSaveButtonDisabled: true,
    });
  }

  deleteCard({ target: { className } }) {
    const identityClassName = className;
    const { cardList } = this.state;
    const cardObject = cardList.find(
      (card) => card.cardName === identityClassName,
    );
    const list = cardList;
    const indexCardObject = list.indexOf(cardObject);
    list.splice(indexCardObject, 1);
    if (cardObject.cardTrunfo) {
      this.setState({ cardList: list, hasTrunfo: false, cardTrunfo: false });
    } else {
      this.setState({ cardList: list });
    }
  }

  validationChecked() {
    const { checkedTrunfo } = this.state;
    if (checkedTrunfo) {
      this.setState({
        checkedTrunfo: false,
        disabledInput: false,
      });
    } else {
      this.setState({
        checkedTrunfo: true,
        disabledInput: true,
      });
    }
  }

  render() {
    const valueState = this.state;
    return (
      <div>
        <header>
          <p id="header-title">Jogo Super Trunfo - Rick And Morty</p>
        </header>
        <main>
          <section id="form-card">
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
              card="card-preview"
              cardName={ valueState.cardName }
              cardDescription={ valueState.cardDescription }
              cardAttr1={ valueState.cardAttr1 }
              cardAttr2={ valueState.cardAttr2 }
              cardAttr3={ valueState.cardAttr3 }
              cardImage={ valueState.cardImage }
              cardRare={ valueState.cardRare }
              cardTrunfo={ valueState.cardTrunfo }
              cardList={ valueState.cardList }
            />
          </section>
          <section id="section-filters">
            <div id="filters">
              <div id="title-list">
                <p>Lista de Cartas</p>
              </div>
              <div id="div-filters">
                <div className="div-inputs">
                  <FilterCards
                    nameFilter={ valueState.nameFilter }
                    onInputChange={ this.onInputChange }
                    disabledInput={ valueState.disabledInput }
                  />
                </div>
                <div className="div-inputs">
                  <RarityFilter
                    rareFilter={ valueState.rareFilter }
                    onInputChange={ this.onInputChange }
                    disabledInput={ valueState.disabledInput }
                  />
                </div>
                <div className="div-inputs">
                  <FilterTrunfo
                    checkedTrunfo={ valueState.checkedTrunfo }
                    validationChecked={ this.validationChecked }
                  />
                </div>
              </div>
            </div>
          </section>
          <CardList
            cardList={ valueState.cardList }
            nameFilter={ valueState.nameFilter }
            rareFilter={ valueState.rareFilter }
            checkedTrunfo={ valueState.checkedTrunfo }
            deleteCard={ this.deleteCard }
          />
        </main>
        <footer>
          <p>Feito por Arthur Teixeira</p>
        </footer>
      </div>
    );
  }
}

export default App;
