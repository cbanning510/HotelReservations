import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchReservations from '../queries/fetchReservations';
import '../style/style.css';

class ReservationList extends Component {

  constructor(props) {
    super(props);

    this.state = { id: '' };
  }
  
  renderReservationList() {
    return this.props.data.allReservations.map(reservation => {
      return (
        <li key={reservation._id} className="collection-item">
          <p>            
            <label>Name:</label>{reservation.name}<br></br>      
            <label>Hotel: </label>{reservation.hotelName}<br></br>
            <label>Arrival Date: </label>{reservation.arrivalDate}<br></br>
            <label>Departure Date: </label>{reservation.departureDate}<br></br>
            <label>Reservation ID:</label>{reservation._id}<br></br>
          </p>
        </li>
      );
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        name: this.state.name,
        hotelName: this.state.hotelName,
        arrivalDate: this.state.arrivalDate,
        departureDate: this.state.departureDate
      },
      refetchQueries: [{ query: fetchReservations }]
    }).then(() => hashHistory.push('/'))
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }
    return (
      <div>
        <h4 className="teal lighten-2">Reservation List</h4>

        <div>
          <Link
            to="/reservations/new"
            className="newReservationButton waves-effect waves-light btn">New Reservation
          </Link><br></br>       
        </div>
        
        <ul className="collection">
          {this.renderReservationList()}
        </ul>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <Link
              to={`/reservations/${this.state.id}`}
              className="inline waves-effect waves-light btn">Search by ID
            </Link>
            
          </div><br></br>
          <label>ID:</label>
          <input
            className="inline"
            required
            onChange={event => this.setState({ id: event.target.value })}
            value={this.state.name}
          />      
        </form>
      </div>      
    );
  }
}

export default graphql(fetchReservations) (ReservationList);
