export default `
  
  type Reservation {
    _id: String
    name: String
    hotelName: String
    arrivalDate: String
    departureDate: String
  }

  type Query {
    allReservations: [Reservation]!,
    getReservation(id: String!): Reservation
  }

  type Mutation {
    createReservation(
      name: String!,
      hotelName: String,
      arrivalDate: String,
      departureDate: String): Reservation
  }
`;
