import mongoose from 'mongoose';

const Reservation = mongoose.model('Reservation', {
  name: String,
  hotelName: String,
  arrivalDate: String,
  departureDate: String
});

export default Reservation;
