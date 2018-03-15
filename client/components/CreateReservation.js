import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchReservations from '../queries/fetchReservations'
import createReservationMutation from '../queries/createReservationMutation';
import '../style/style.css';

class CreateReservation extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
    this.state = { hotelName: '' };
    this.state = { arrivalDate: '' };
    this.state = { departureDate: ''};
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
    return (
      <div><br></br>
      <Link to="/">Back to Reservations</Link>
        <h4
          className="teal lighten-2"
        >
          Create Reservation
        </h4>
        <form onSubmit={this.onSubmit.bind(this)}>          
          <label>Name:</label>
          <input
            required
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.name} 
          />         
          <label>Hotel Name:</label>
          <input
            required
            onChange={event => this.setState({ hotelName: event.target.value })}
            value={this.state.hotelName}
          />
          <label>Arrival Date:</label>
          <input
            type="date"
            className="datepicker"
            required
            onChange={event => this.setState({ arrivalDate: event.target.value })}
            value={this.state.arrivalDate}
          />
          <label>Departure Date</label>
          <input
            type="date"
            className="datepicker"
            required
            onChange={event => this.setState({ departureDate: event.target.value })}
            value={this.state.departureDate}
          />
          <button className="waves-effect waves-light left btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(createReservationMutation)(CreateReservation);
