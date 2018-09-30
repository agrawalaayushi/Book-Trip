import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
import SearchBar from '../common/search-bar';
import '../../styles/app.scss';
import SearchForm from '../Flight/search-form';
import FlightList from '../Flight/flight-list';

class Home extends Component {
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
    this.props.history.push('/flights');
  }

  render() {
    return (
      <div className="flight-search-app">
        <Header />
        {/* <div className="search-bar">
          <div className="search-bar-wrapper">
            <SearchBar
              handleSearchQueryCallback={(query)=> this.handleSearchMovies(query)}         
              />
          </div>
        </div> */}
        <div className="flight-info-container">
          <div className="left-col">
            <SearchForm />
          </div>
          <div className="right-col">
            <FlightList />
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
