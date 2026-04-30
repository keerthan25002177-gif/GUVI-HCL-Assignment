use cabDB

db.rides.insertMany([
  {
    ride_id: 1001,
    rider_name: "Ravi",
    driver_name: "Suresh",
    pickup_location: "Madikeri",
    drop_location: "Kushalnagar",
    ride_date: new Date(), // today
    distance_km: 25,
    fare: 500,
    ride_status: "Requested"
  },
  {
    ride_id: 1002,
    rider_name: "Sneha",
    driver_name: "Ramesh",
    pickup_location: "Bangalore",
    drop_location: "Mysore",
    ride_date: new Date("2026-04-01"),
    distance_km: 150,
    fare: 2000,
    ride_status: "Completed"
  },
  {
    ride_id: 1003,
    rider_name: "Arjun",
    driver_name: "Kiran",
    pickup_location: "Mysore",
    drop_location: "Mandya",
    ride_date: new Date(), // today
    distance_km: 45,
    fare: 700,
    ride_status: "Requested"
  },
  {
    ride_id: 1004,
    rider_name: "Pooja",
    driver_name: "Anil",
    pickup_location: "Coorg",
    drop_location: null,
    ride_date: new Date("2023-05-01"),
    distance_km: 10,
    fare: 200,
    ride_status: "Cancelled"
  },
  {
    ride_id: 1005,
    rider_name: "Vikram",
    driver_name: "Mahesh",
    pickup_location: "Hassan",
    drop_location: "Bangalore",
    ride_date: new Date("2026-03-15"),
    distance_km: 180,
    fare: 2500,
    ride_status: "Accepted"
  }
])

db.rides.find({
  ride_status: "Requested",
  ride_date: {
    $gte: new Date(new Date().setHours(0, 0, 0, 0)),
    $lt: new Date(new Date().setHours(23, 59, 59, 999))
  }
})

db.rides.updateMany(
  { drop_location: { $ne: null } },
  { $set: { ride_status: "Completed" } }
)

db.rides.deleteMany({
  ride_status: "Cancelled",
  ride_date: { $lt: new Date("2024-06-01") }
})

db.rides.find({
  distance_km: { $gt: 10 },
  fare: { $gt: 300 }
})
