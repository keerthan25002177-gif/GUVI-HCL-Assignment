use eventDB

db.bookings.insertMany([
  {
    booking_id: 2101,
    event_name: "Music Fest",
    event_date: new Date("2026-11-10"),
    venue: "Bangalore",
    customer_name: "Ravi",
    ticket_type: "VIP",
    number_of_tickets: 2,
    total_price: 5000,
    booking_date: new Date("2026-09-01"),
    payment_status: "Paid"
  },
  {
    booking_id: 2102,
    event_name: "Tech Conference",
    event_date: new Date("2026-12-05"),
    venue: "Hyderabad",
    customer_name: "Sneha",
    ticket_type: "General",
    number_of_tickets: 3,
    total_price: 3000,
    booking_date: new Date("2026-08-20"),
    payment_status: "Paid"
  },
  {
    booking_id: 2103,
    event_name: "Art Expo",
    event_date: new Date("2026-09-15"),
    venue: "Delhi",
    customer_name: "Arjun",
    ticket_type: "Student",
    number_of_tickets: 1,
    total_price: 500,
    booking_date: new Date("2026-07-10"),
    payment_status: "Pending"
  },
  {
    booking_id: 2104,
    event_name: "Food Carnival",
    event_date: new Date("2023-11-20"),
    venue: "Mumbai",
    customer_name: "Pooja",
    ticket_type: "General",
    number_of_tickets: 4,
    total_price: 2000,
    booking_date: new Date("2023-10-01"),
    payment_status: "Paid"
  },
  {
    booking_id: 2105,
    event_name: "Music Fest",
    event_date: new Date("2026-10-15"),
    venue: "Bangalore",
    customer_name: "Vikram",
    ticket_type: "VIP",
    number_of_tickets: 2,
    total_price: 4500,
    booking_date: new Date("2026-09-10"),
    payment_status: "Pending"
  }
])

db.bookings.find({
  event_date: { $gt: new Date("2026-10-01") },
  payment_status: "Paid"
})

db.bookings.updateMany(
  {
    event_date: { $lt: new Date() },
    payment_status: "Paid"
  },
  {
    $set: { payment_status: "Refunded" }
  }
)

db.bookings.deleteMany({
  payment_status: "Pending",
  booking_date: { $lt: new Date("2024-01-01") }
})

db.bookings.aggregate([
  {
    $group: {
      _id: "$event_name",
      total_tickets_sold: { $sum: "$number_of_tickets" }
    }
  }
])