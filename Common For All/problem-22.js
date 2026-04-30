use travelDB

db.itineraries.insertMany([
  {
    itinerary_id: 1501,
    customer_name: "Ravi",
    destination: "Manali",
    trip_start_date: new Date("2026-06-01"),
    trip_end_date: new Date("2026-06-07"),
    budget: 60000,
    activities: ["Sightseeing", "Trekking"],
    hotel_name: "Snow View Hotel",
    booking_status: "Confirmed"
  },
  {
    itinerary_id: 1502,
    customer_name: "Sneha",
    destination: "Goa",
    trip_start_date: new Date("2026-05-10"),
    trip_end_date: new Date("2026-05-15"),
    budget: 40000,
    activities: ["Beach", "Water Sports"],
    hotel_name: "Sea Breeze Resort",
    booking_status: "Pending"
  },
  {
    itinerary_id: 1503,
    customer_name: "Arjun",
    destination: "Ooty",
    trip_start_date: new Date("2025-12-01"),
    trip_end_date: new Date("2025-12-05"),
    budget: 30000,
    activities: ["Sightseeing", "Boating"],
    hotel_name: "Hilltop Inn",
    booking_status: "Confirmed"
  },
  {
    itinerary_id: 1504,
    customer_name: "Pooja",
    destination: "Kashmir",
    trip_start_date: new Date("2023-11-01"),
    trip_end_date: new Date("2023-11-10"),
    budget: 80000,
    activities: ["Skiing", "Trekking"],
    hotel_name: "Valley Resort",
    booking_status: "Cancelled"
  },
  {
    itinerary_id: 1505,
    customer_name: "Vikram",
    destination: "Coorg",
    trip_start_date: new Date("2026-07-01"),
    trip_end_date: new Date("2026-07-05"),
    budget: 55000,
    activities: ["Trekking", "Camping"],
    hotel_name: "Green Woods",
    booking_status: "Confirmed"
  }
])

db.itineraries.find({
  booking_status: "Confirmed",
  budget: { $gt: 50000 }
})

db.itineraries.updateMany(
  { trip_start_date: { $lt: new Date() } },
  { $set: { booking_status: "Cancelled" } }
)

db.itineraries.deleteMany({
  booking_status: "Cancelled",
  trip_end_date: { $lt: new Date("2024-01-01") }
})

db.itineraries.find({
  activities: "Trekking"
})