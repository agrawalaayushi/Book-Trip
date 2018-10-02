import React, { Component } from 'react';

class FlightCardView extends Component {
  constructor(props) {
    super(props); 
    this.state={ 
    };
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  bookFlight() {
    // send selected flight details to home to make api call
  }
  //-----------------------------------
  // Views
  //-----------------------------------
  
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

    render() {
    const { flightList, tripType } = this.props;
    const { onboardFlight } = flightList;
    const { returnFlight } = flightList;
    
    return(
      <div className="flight-card">
        <div className="flight-fare">
          {tripType && tripType === 'oneWay' && <span>Rs. {onboardFlight.fare && onboardFlight.fare.totalfare}</span>}
          {tripType && tripType === 'return'} && <span>Rs. {`${onboardFlight.fare.totalfare + returnFlight.fare.totalfare}`}</span>
        </div>
     
        <div className="flight-details-wrapper">
          {onboardFlight && 
            <div className="onboard-details"> 
              <span className="flight-number">{onboardFlight.flightNo}</span>
              <span className="flight-route">{`${onboardFlight.origin} > ${onboardFlight.destination}`}</span>
              <span className="flight-dep-time">{`Depart: ${onboardFlight.deptime}`}</span>
              <span className="flight-arr-time">{`Arrive: ${onboardFlight.arrtime}`}</span>
            </div>
          }
          {returnFlight && 
            <div className="onboard-details">
              <span className="flight-number">{returnFlight.flightNo}</span>
              <span className="flight-route">{`${returnFlight.destination} > ${returnFlight.origin}`}</span>
              <span className="flight-dep-time">{`Depart: ${returnFlight.deptime}`}</span>
              <span className="flight-arr-time">{`Arrive: ${returnFlight.arrtime}`}</span>
            </div>
          }
          <div>
            <div><img alt="flight-company-logo"/></div>
            <div onClick={()=> this.bookFlight()}>Book this flight</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightCardView
