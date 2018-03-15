export default {
  Query: {
    allReservations: async (parent, args, { Reservation }) => {
      const reservations = await Reservation.find();
      return reservations.map(reservation => {
        reservation._id = reservation._id.toString();
        return reservation;
      });
    },
    getReservation: async (parent, args, { Reservation }) => {
      const reservation = await Reservation.findById(args.id)
      return reservation;
    }
  },
  Mutation: {
    createReservation: async (parent, args, { Reservation }) => {
      const reservation = await new Reservation(args).save();
        reservation._id = reservation._id.toString();
        return reservation;
    }
  }
}
