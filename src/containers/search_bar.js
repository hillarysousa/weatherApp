import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CountryDropdown} from 'react-country-region-selector';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: '', country: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onCountryChange(val) {
    this.setState({country: val});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Buscar os dados da previsão do tempo
    this.props.fetchWeather(this.state.term, this.state.country);
    this.setState({term: '', country: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input placeholder="Get a five-day forecast in your favorite cities" className="form-control" value={this.state.term} onChange={this.onInputChange} />
        <CountryDropdown value={this.state.country} onChange={(val) => this.onCountryChange(val)} classes="form-control" valueType="short" defaultOptionLabel="Select your country" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);