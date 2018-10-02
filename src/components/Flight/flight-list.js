import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
import '../../styles/app.scss';
import FlightCardView from '../common/flight-card-view';

class FlightList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightDetails: ""
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  //-----------------------------------
  // Views
  //-----------------------------------

  getLoaderView() {
    return (
      <div>Loading</div>
    )
  }

  getEmptyStateView() {
    return (
      <div>Empty</div>
    )
  }

  getFlightCardView(flightList, index) {
    const {flightDetails} = this.state;
    return (
      <FlightCardView
        key={index.toString()}
        flightList={flightList}
        tripType={flightDetails.tripType}
      />
    )
  }

  getFlightLists(flightList) {
    return (
      <div>
        { flightList.flights.length > 0 ? 
          flightList.flights.map((item, index)=>(this.getFlightCardView(item, index))):
          this.getEmptyStateView()
        }
      </div>
    )
  }

  // getVideos() {

  //   return(
  //     <div className="position-relative">
  //       {galleryVideos.length > 0 ?
  //         <div className="gallery-card-wrp">
  //             { galleryVideos.map((item, index) =>( this.getCardView(item, index) )) }
  //         </div> :
  //         <div className="section-content-border position-relative">
  //           <div className= "data-not-available-wrp">
  //             <p className="data-not-available">{t('common.videos')} {t('common.notAvailable')}</p>
  //           </div>
  //         </div>
  //       }
  //     </div>
  //   )
  // }
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    // this.props.history.push('/flights');

  }


  componentWillReceiveProps(newProps) {
    this.setState({
      flightDetails: newProps.flightDetails,
      flights: newProps.flightList
    })
  }

  render() {
    const { flightDetails, flightList } = this.props;
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
        <div>
          {flightList ? this.getFlightLists(flightList) : this.getLoaderView() }
        </div>
      </div>
    );
  }
}


export default FlightList;
