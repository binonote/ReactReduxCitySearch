'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onTermChange = ((e) => {
    this.setState({
      term: e.target.value
    })
  }).bind(this)

  onFormSubmit = ((e) => {
    e.preventDefault();
    console.log('you enter ' + this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }).bind(this)

  render() {
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input className="form-control" value={this.state.term} onChange={this.onTermChange} />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
