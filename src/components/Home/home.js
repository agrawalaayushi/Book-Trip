import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
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

  searchDetailsCallback(searchDetails) {
    this.setState({
      flightDetails: searchDetails
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
    const { flightDetails } = this.state;
    return (
      <div className="flight-search-app">
        <Header />
        <div className="flight-info-container">
          <div className="left-col">
            <SearchForm searchDetailsCallback={(searchDetails) => this.searchDetailsCallback(searchDetails)} />
          </div>
          <div className="right-col">
            <FlightList flightDetails={flightDetails}/>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
