import React, { Component } from 'react';

export default class Review extends Component {
  constructor() {
    super();
    this.state = {
      currentRating: 0,
      currentEmail: '',
      currentReview: '',
      avaliations: [],
    };
  }

  componentDidMount() {
    this.getAvaliations();
  }

  handleEmailChange({ target: { value } }) {
    this.setState({ currentEmail: value });
  }

  handleRatingChange({ target: { value } }) {
    this.setState({ currentRating: value });
  }

  handleReviewChange({ target: { value } }) {
    this.setState({ currentReview: value });
  }

  getAvaliations() {
    const avaliations = JSON.parse(localStorage.getItem('avaliations'));
    this.setState({ avaliations });
  }

  saveAvaliations() {
    const { currentRating, currentReview, currentEmail } = this.state;
    let reviews = [];
    if (localStorage.getItem('avaliations')) {
      reviews = JSON.parse(localStorage.getItem('avaliations'));
    }
    const avaliation = {
      review: currentReview,
      rating: currentRating,
      email: currentEmail,
    };
    reviews.push(avaliation);
    localStorage.setItem('avaliations', JSON.stringify(reviews));
    this.getAvaliations();
    this.setState({
      currentRating: 0,
      currentReview: '',
      currentEmail: '',
    });
  }

  render() {
    const { currentEmail, currentReview, avaliations } = this.state;
    return (
      <section>
        <h2>
          Avaliação
        </h2>
        <section>
          <div>
            <input
              type="email"
              placeholder="Email"
              data-testid="product-detail-email"
              value={ currentEmail }
              onChange={ (e) => this.handleEmailChange(e) }
            />
            <input
              type="radio"
              value="1"
              data-testid="1-rating"
              onChange={ (e) => this.handleRatingChange(e) }
            />
            <input
              type="radio"
              value="2"
              data-testid="2-rating"
              onChange={ (e) => this.handleRatingChange(e) }
            />
            <input
              type="radio"
              value="3"
              data-testid="3-rating"
              onChange={ (e) => this.handleRatingChange(e) }
            />
            <input
              type="radio"
              value="4"
              data-testid="4-rating"
              onChange={ (e) => this.handleRatingChange(e) }
            />
            <input
              type="radio"
              value="5"
              data-testid="5-rating"
              onChange={ (e) => this.handleRatingChange(e) }
            />
          </div>
          <div>
            <textarea
              placeholder="Mensagem(Opcional)"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              value={ currentReview }
              onChange={ (e) => this.handleReviewChange(e) }
            />
          </div>
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ () => this.saveAvaliations() }
          >
            Avaliar
          </button>
          {avaliations && avaliations.map(({ review, rating, email }, index) => (
            <div key={ index }>
              <h4>
                {email}
              </h4>
              <input
                type="range"
                step="0.5"
                max="5"
                value={ rating }
              />
              <p>
                {review}
              </p>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

//
