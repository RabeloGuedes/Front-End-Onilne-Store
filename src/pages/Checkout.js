import React from 'react';

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      adress: '',
      buttonOff: true,
      pix: false,
      credito: false,
      boleto: false,
      debito: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ products });
  }

  handleNameChange({ target }) {
    const { value } = target;
    this.setState(() => ({ [target.name]: value }), () => this.inputCheck());
  }

  handleRadioChange({ target }) {
    this.setState(() => ({
      pix: false,
      boleto: false,
      debito: false,
      credito: false,
      [target.value]: true,
    }), () => this.inputCheck());
  }

  inputCheck() {
    const { name,
      email,
      cpf,
      phone,
      cep,
      adress,
      pix,
      boleto,
      credito,
      debito } = this.state;
    if (name.length > 0
      && email.length > 0 && email.includes('@')
      && cpf.length > 0
      && phone.length > 0
      && cep.length > 0
      && adress.length > 0) {
      if (pix || boleto || credito || debito) {
        this.setState({
          buttonOff: false,
        });
      }
    } else {
      this.setState({
        buttonOff: true,
      });
    }
  }

  render() {
    const { products,
      name,
      email,
      cpf,
      cep,
      adress,
      phone,
      buttonOff,
      pix,
      debito,
      credito,
      boleto } = this.state;
    return (
      <section>
        <div>
          {products.map((product) => (
            <div key={ product.id }>
              <h4>{product.title}</h4>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{`R$${product.price}`}</p>
              <p>{`Quantidade: ${product.quantity}`}</p>
              <h4>{`Subtotal R$${product.quantity * product.price}`}</h4>
            </div>))}
          <h3>
            {`Total: R$${products
              .reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)}`}
          </h3>
        </div>
        <forms action="">
          <div>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              required
              onChange={ this.handleNameChange }
              value={ name }
              name="name"
            />
            <input
              type="email"
              data-testid="checkout-email"
              placeholder="Email"
              required
              onChange={ this.handleNameChange }
              value={ email }
              name="email"
            />
            <input
              type="text"
              data-testid="checkout-cpf"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              placeholder="CPF"
              required
              onChange={ this.handleNameChange }
              value={ cpf }
              name="cpf"
            />
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              required
              onChange={ this.handleNameChange }
              value={ phone }
              name="phone"
            />
          </div>
          <div>
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              required
              onChange={ this.handleNameChange }
              value={ cep }
              name="cep"
            />
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              required
              onChange={ this.handleNameChange }
              value={ adress }
              name="adress"
            />
          </div>
          <label htmlFor="debito">
            Débito
            <input
              type="radio"
              value="debito"
              name="pay"
              onClick={ this.handleRadioChange }
              checked={ debito }
            />
          </label>
          <label htmlFor="credito">
            Crédito
            <input
              type="radio"
              value="credito"
              name="pay"
              onClick={ this.handleRadioChange }
              checked={ credito }
            />
          </label>
          <label htmlFor="Pix">
            Pix
            <input
              type="radio"
              value="pix"
              name="pay"
              onClick={ this.handleRadioChange }
              checked={ pix }
            />
          </label>
          <label htmlFor="boleto">
            Boleto
            <input
              type="radio"
              value="boleto"
              name="pay"
              onClick={ this.handleRadioChange }
              checked={ boleto }
            />
          </label>
          <button type="button" disabled={ buttonOff }>Comprar</button>
        </forms>
      </section>
    );
  }
}
