import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Header } from '../Header/header';
import SearchBar from '../common/search-bar';
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
        end_date: '',
        start_date: ''
      },
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

  handleStartDate(field, date) {
    const {isError} = this.state;
    let fields = this.state.fields;
    fields[field] = date;
    this.setState({
      fields,
      errors: {}
    });
  };

  handleReturnDate(field, date) {
    const {isError} = this.state;
    let fields = this.state.fields;
    fields[field] = date;
    this.setState({
      fields,
      errors: {}
    });
  };
  
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    // this.props.history.push('/flights');
  }

  render() {
    return (
      <div className="flight-search-form">
        <div className="search-box">
          <form>
            <div className="button-wrapper">
              <input type="button" value="One Way" />
              <input type="button" value="Return" />
            </div>
            <div className="search-form-wrapper">
              <input type="text" name="firstname" placeholder="Enter origin city" />
              <input type="text" name="firstname" placeholder="Enter Destination city" />
              {/* <input type="date" name="firstname" placeholder="Enter Destination city" />
              <input type="date" name="firstname" placeholder="Enter Destination city" /> */}

              <div className='date-picker-wrapper'>
                <DayPickerInput
                  format="DD/MM/YYYY"
                  formatDate={formatDate}
                  parseDate={parseDate}
                  placeholder="Start Date"
                  onDayChange={this.handleStartDate.bind(this, 'start_date')}
                  value={getFormatedDate(this.state.fields["start_date"])}
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
              <select>
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
              <input type="submit" value="Search" />
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
