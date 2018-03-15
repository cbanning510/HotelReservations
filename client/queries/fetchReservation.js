import gql from 'graphql-tag';

export default gql`
  query GetReservation($id: String!) {
    getReservation(id: $id) {
      _id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
