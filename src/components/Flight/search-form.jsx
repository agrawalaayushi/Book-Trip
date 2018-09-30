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
        <div className="search-box">
          <form>
            <div className="button-wrapper">
              <input type="button" value="One Way" />
              <input type="button" value="Return" />
            </div>
            <div className="search-form-wrapper">
              <input type="text" name="firstname" placeholder="Enter origin city" />
              <input type="text" name="firstname" placeholder="Enter Destination city" />
              <input type="date" name="firstname" placeholder="Departure date" />
              <input type="date" name="firstname" placeholder="Return date" />
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
