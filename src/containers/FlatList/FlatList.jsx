/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../../actions/index';


// Component
import Flat from '../../components/Flat/Flat';

class FlatList extends Component {
  // static defaultProps = {
  //   flats: [
  //     {
  //       name: "Charm at the Steps of Montmartre",
  //       imageUrl:
  //         "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //       price: 164,
  //       priceCurrency: "EUR",
  //     },
  //   ],
  // };

  componentWillMount () {
    this.props.setFlats();
    debugger
  }

  // eslint-disable-next-line lines-between-class-members
  render() {
    return (
      <div className="col-sm-7">
        {this.props.flats.map(flat => <Flat key={flat.name} flat={flat} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
