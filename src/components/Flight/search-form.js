import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from 'react-day-picker/moment';
import "react-day-picker/lib/style.css";
import '../../styles/app.scss';
import { getFormatedDate } from '../../constants/string-utils';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields:{
        origin: '',
        destination: '',
        passenger: 0,
        return_date: '',
        dep_date: '',
        tripType: 'oneWay'
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTripTypeChange = this.handleTripTypeChange.bind(this);
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      fields,
      errors: {}
    });
  }

  handleStartDate(field, date) {
    let fields = this.state.fields;
    fields[field] = date;
    this.setState({
      fields,
      errors: {}
    });
  };

  handleReturnDate(field, date) {
    let {fields} = this.state;
    fields[field] = date;
    this.setState({
      fields,
      errors: {}
    });
  };
  
  handleTripTypeChange(e) {
    let fields = this.state;
    fields['tripType'] = e.target.value;
    this.setState({ 
      fields, 
    })
  }

  // handleUploadChoice = (e, { value }) => this.setState({ value, selectUploadChoice: value });


  handleFormValidation(fields) {
    let errors = {};
    let formIsValid = true;
    let result = {};

    if(fields["origin"] === '') {
      formIsValid = false;
      errors["origin"] = "Please provide origin";
    } else if(fields["destination"] === '') {
      formIsValid = false;
      errors["destination"] = "Please provide destination";
    } else if(fields["dep_date"] === '') {
      formIsValid = false;
      errors["dep_date"] = "Please provide date of journey";
    } else if(fields["passenger"] === ''){
      formIsValid = false;
      errors["passenger"] = "Please provide passenger";
    } 
    result['errors'] = errors;
    result['isFormValid'] = formIsValid;
    return result;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fields, isError } = this.state;
    const formValidationFeedback = this.handleFormValidation(fields);

    if(formValidationFeedback.isFormValid) {
      const params={
        tripType: fields.tripType,
        origin: fields.origin,
        destination: fields.destination,
        passenger: fields.passenger
      };
      if(fields.dep_date) {
        params['dep_date'] = getFormatedDate(fields.dep_date);
      }
      if(fields.tripType === 'return' && fields.return_date) {
        params['return_date'] = getFormatedDate(fields.return_date);
      }
      // this.setState({
      //   isLoading: true
      // })
      this.props.searchDetailsCallback(params);
    } else{
      this.setState({errors:formValidationFeedback.errors, isLoading: false});
    }
  }
  
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    // this.props.history.push('/flights');
  }

  render() {
    const { tripType } = this.state.fields;
    return (
      <div className="flight-search-form">
        <div className="search-box">
          <form onSubmit={this.handleSubmit}>
            <div className="button-wrapper">
              <input 
              type="radio" 
              name="oneWay" 
              value="oneWay"
              checked={this.state.fields["tripType"] === "oneWay"}
              onChange={this.handleTripTypeChange} /> One Way

              <input
              type="radio" 
              name="return" 
              value="return"
              checked={this.state.fields["tripType"] === "return"} 
              onChange={this.handleTripTypeChange}  /> Return  
            </div>
            <div className="search-form-wrapper">
              <input type="text" name="origin" placeholder="Enter Origin city" value={this.state.fields["origin"]}  
              onChange={this.handleChange.bind(this, 'origin')} />
              <input type="text" name="destination" placeholder="Enter Destination city" value={this.state.fields["destination"]}  
              onChange={this.handleChange.bind(this, 'destination')} />

              <div className='date-picker-wrapper'>
                <DayPickerInput
                  format="DD/MM/YYYY"
                  formatDate={formatDate}
                  parseDate={parseDate}
                  placeholder="Start Date"
                  onDayChange={this.handleStartDate.bind(this, 'dep_date')}
                  value={getFormatedDate(this.state.fields["dep_date"])}
                  inputProps={{readOnly: true}}
                />
                <DayPickerInput
                  format="DD/MM/YYYY"
                  formatDate={formatDate}
                  parseDate={parseDate}
                  placeholder="End Date"
                  onDayChange={this.handleReturnDate.bind(this, 'return_date')}
                  value={getFormatedDate(this.state.fields["return_date"])}
                  inputProps={{readOnly: true}}
                />
              </div>
              <select placeholder="Passenger" value="Passenger"> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select> 
              <input type="submit" value="Search" onClick={this.handleSubmit}/>
            </div>
          </form>
        </div>
        <div className="refine-price-wrapper">
          Refine flight search

        </div>
      </div>
    );
  }
}


export default SearchForm;
