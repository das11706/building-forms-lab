import React, { Component } from 'react';
import { connect } from "react-redux";
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>);
  // renderBands = () => this.props.bands.map((band, id) => <BandInput key={id} name={band} />);
  
  
  render() {
    console.log(this.props.bands)
    return(
      <div>
        BandsContainer
        <ol>
          {this.renderBands()}
        </ol>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

