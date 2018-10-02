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
      "data":{
        "flights": [
          {
            id: 1,
            "returnFlight": {
                "origin": "DEL",
                "destination": "PNQ",
                "rating": 0,
                "flightcode": "173",
                "depterminal": "2",
                "deptime": "08:35",
                "arrtime": "10:45",
                "arrterminal": "-",
                "flightno": "173",
                "stops": "0",
                "seatsavailable": "20",
                "carrierid": "G8",
                "fare": {
                 "totalfare": 3545,
                },
                "depdate": "2019-01-11t0835",
                "arrdate": "2019-01-11t1045",
               },
            "onboardFlight": {
                "origin": "PNQ",
                "flightcode": "176",
                "deptime": "01:20",
                "arrtime": "03:40",
                "duration": "2h 20m",
                "destination": "DEL",
                "stops": "0",
                "seatsavailable": "16",
                "fare": {
                 "adultbasefare": 2438,
                 "totalfare": 3722,
                },
                "onwardflights": [],
                "aircraftType": "320",
                "seatingclass": "E",
                "multicitysearch": "",
                "depdate": "2019-01-10t0120",
                "arrdate": "2019-01-10t0340",
               },
          },
          {
            id: 2,
            "returnFlight": {
                "origin": "DEL",
                "destination": "PNQ",
                "rating": 0,
                "flightcode": "173",
                "depterminal": "2",
                "deptime": "08:35",
                "arrtime": "10:45",
                "arrterminal": "-",
                "flightno": "173",
                "stops": "0",
                "seatsavailable": "20",
                "carrierid": "G8",
                "fare": {
                 "totalfare": 3545,
                },
                "depdate": "2019-01-11t0835",
                "arrdate": "2019-01-11t1045",
               },
            "onboardFlight": {
                "origin": "PNQ",
                "flightcode": "176",
                "deptime": "01:20",
                "arrtime": "03:40",
                "duration": "2h 20m",
                "destination": "DEL",
                "stops": "0",
                "seatsavailable": "16",
                "fare": {
                 "adultbasefare": 2438,
                 "totalfare": 3722,
                },
                "onwardflights": [],
                "aircraftType": "320",
                "seatingclass": "E",
                "multicitysearch": "",
                "depdate": "2019-01-10t0120",
                "arrdate": "2019-01-10t0340",
               },
          },
          {
            id: 3,
            "returnFlight": {
                "origin": "DEL",
                "destination": "PNQ",
                "rating": 0,
                "flightcode": "173",
                "depterminal": "2",
                "deptime": "08:35",
                "arrtime": "10:45",
                "arrterminal": "-",
                "flightno": "173",
                "stops": "0",
                "seatsavailable": "20",
                "carrierid": "G8",
                "fare": {
                 "totalfare": 3545,
                },
                "depdate": "2019-01-11t0835",
                "arrdate": "2019-01-11t1045",
               },

            "onboardFlight": {
                "origin": "PNQ",
                "flightcode": "176",
                "deptime": "01:20",
                "arrtime": "03:40",
                "duration": "2h 20m",
                "destination": "DEL",
                "stops": "0",
                "seatsavailable": "16",
                "fare": {
                 "adultbasefare": 2438,
                 "totalfare": 3722,
                },
                "onwardflights": [],
                "aircraftType": "320",
                "seatingclass": "E",
                "multicitysearch": "",
                "depdate": "2019-01-10t0120",
                "arrdate": "2019-01-10t0340",
             },
          },
          {
            id: 4,
            "returnFlight": {
                "origin": "DEL",
                "destination": "PNQ",
                "rating": 0,
                "flightcode": "173",
                "depterminal": "2",
                "deptime": "08:35",
                "arrtime": "10:45",
                "arrterminal": "-",
                "flightno": "173",
                "stops": "0",
                "seatsavailable": "20",
                "carrierid": "G8",
                "fare": {
                 "totalfare": 3545,
                },
                "depdate": "2019-01-11t0835",
                "arrdate": "2019-01-11t1045",
               },

            "onboardFlight": {
                "origin": "PNQ",
                "flightcode": "176",
                "deptime": "01:20",
                "arrtime": "03:40",
                "duration": "2h 20m",
                "destination": "DEL",
                "stops": "0",
                "seatsavailable": "16",
                "fare": {
                 "adultbasefare": 2438,
                 "totalfare": 3722,
                },
                "onwardflights": [],
                "aircraftType": "320",
                "seatingclass": "E",
                "multicitysearch": "",
                "depdate": "2019-01-10t0120",
                "arrdate": "2019-01-10t0340",
               },
          }
        ]
      },
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  searchDetailsCallback(searchDetails) {
    const { data } = this.state;
    this.setState({
      flightDetails: searchDetails,
      flightList: data
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
    const { flightDetails, flightList } = this.state;
    return (
      <div className="flight-search-app">
        <Header />
        <div className="flight-info-container">
          <div className="left-col">
            <SearchForm searchDetailsCallback={(searchDetails) => this.searchDetailsCallback(searchDetails)} />
          </div>
          <div className="right-col">
            <FlightList flightDetails={flightDetails} flightList={flightList}/>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
