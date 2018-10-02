import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
import '../../styles/app.scss';

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data":{
        "flights": [
          {
            id: 1,
            "returnflight": [
              {
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
               }
            ],
            "onboardFlight": [
              {
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
            ]
          },
          {
            id: 2,
            "returnflight": [
              {
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
               }
            ],
            "onboardFlight": [
              {
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
            ]
          },
          {
            id: 3,
            "returnflight": [
              {
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
               }
            ],
            "onboardFlight": [
              {
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
            ]
          },
          {
            id: 4,
            "returnflight": [
              {
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
               }
            ],
            "onboardFlight": [
              {
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
            ]
          }
        ]
      },
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------


  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    // this.props.history.push('/flights');

  }


  componentWillReceiveProps(newProps) {
    this.setState({
      flightDetails: newProps.flightDetails
    })
  }

  render() {
    const { flightDetails } = this.props;
    return (
      <div className="flight-list">
        <div className="flight-route">
          {flightDetails &&
            <div>
              <span>{`${flightDetails.origin} < ${flightDetails.destination}`}</span>
              {flightDetails.tripType === 'return' && <span>{` < ${flightDetails.origin}`}</span>}
              <span>{`Depart: ${flightDetails.dep_date}`}</span>
            </div>}
        </div>
      </div>
    );
  }
}


export default FlightList;
