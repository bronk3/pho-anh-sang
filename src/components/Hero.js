import React, { Component } from 'react';

class Hero extends Component {
  render() {
    var heroImageStyle = {
      backgroundImage: 'url(' + this.props.data.image_url + ')',
    };
    return (
    <section className="hero" style={heroImageStyle}>
<div className="hero__bar">
  <div className="hero__bar__title">
    <h1>{this.props.data.title}</h1>
    <h2>{this.props.data.sub_title}</h2>
  </div>
<div className="hero__bar__contact">
  {this.props.data.call_to_action}
  <h3>{this.props.data.call_to_action_value}</h3>
  </div>
</div>
  <nav className="hero__nav">
    <ul className="hero__nav__items">
      <li className="hero__nav__item">
        <a href="#">About</a>
      </li><li className="hero__nav__item hero__nav__item--selected">
        <a href="#">Menu</a>
      </li><li className="hero__nav__item">
        <a href="#">Order</a>
      </li>
    </ul>
  </nav>
</section>
    );
  }
}

export default Hero;
