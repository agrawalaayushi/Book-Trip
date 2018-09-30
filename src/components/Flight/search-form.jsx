import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
import SearchBar from '../common/search-bar';
import '../../styles/app.scss';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  handleSearchMovies(query) {
    this.setState({
      searchKeyword: query
    })
    // this.props.handleSearchMovies(query);
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    // this.props.history.push('/flights');
  }

  render() {
    return (
      <div className="flight-search-form">
        Search form
      </div>
    );
  }
}


export default SearchForm;
