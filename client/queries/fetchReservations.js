import gql from 'graphql-tag';

export default gql`
  {
    allReservations {
      _id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
