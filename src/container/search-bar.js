'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { zipChange } from '../actions/index';
import { bindActionCreators} from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <input value={this.props.zip} onChange={(e) => this.props.zipChange(e.target.value)} />
        <button onClick={(e) => console.log(`you enter ${this.props.zip}`)}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    zip: state.zip
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({zipChange: zipChange}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
// export default connect(mapStateToProps)(SearchBar);
