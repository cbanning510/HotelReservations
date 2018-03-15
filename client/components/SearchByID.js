import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchReservation from '../queries/fetchReservation';
import { Link } from 'react-router';

class SearchByID extends Component {

  renderReservationList() {
    const reservation = this .props.data.getReservation;
    return (
      <li key={reservation._id} className="collection-item">
        <p>
          <label>Name:</label>{reservation.name}<br></br>
          <label>Hotel: </label>{reservation.hotelName}<br></br>
          <label>Arrival Date: </label>{reservation.arrivalDate}<br></br>
          <label>Departure Date: </label>{reservation.departureDate}<br></br>
        </p>
      </li>
    );
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div>Loading...</div>
       );
    }

    return (
      <div>
        <Link to="/">Back to Reservations</Link>      
        <h4 className="teal lighten-2">Search results</h4>
        <ul className="collection">
          {this.renderReservationList()}
        </ul>
      </div>
    );
  }
}

export default graphql(fetchReservation, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SearchByID);
