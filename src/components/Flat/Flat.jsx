import React, { Component } from "react";

class Flat extends Component {
  render() {
    return (
      <div class="flat card-trip">
        <img src={this.props.flat.imageUrl} />
        <div class="card-trip-infos">
            <h2>{this.props.flat.name}</h2>
          <p class="card-trip-pricing">{this.props.flat.priceCurrency} {this.props.flat.price}</p>
        </div>
      </div>
    );
  }
}

export default Flat;
