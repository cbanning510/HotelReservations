import gql from 'graphql-tag';

export default gql`
  mutation CreateReservation(
    $name: String!,
    $hotelName: String,
    $arrivalDate: String,
    $departureDate: String
	)
  {
    createReservation(
      name: $name,
      hotelName: $hotelName,
      arrivalDate: $arrivalDate,
      departureDate: $departureDate  
    ){
      _id
    }
  }
`;
