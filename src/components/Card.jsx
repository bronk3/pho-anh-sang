import React, { Component } from 'react';

class Card extends Component {
  render() {
  var cardImageStyle = {
    backgroundImage: 'url(' + this.props.data.image_url + ')',
  };
    return (
      <section className="card">
        <div className="card__description">
        <div className="card__title">{this.props.data.title}</div>
        {this.props.data.description}
        </div>
        <div className="card__image" style={cardImageStyle}></div>
      </section>
    );
  }
}

export default Card;
