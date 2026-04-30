use deliveryDB

db.riders.insertMany([
  {
    rider_id: 1901,
    rider_name: "Ravi",
    city: "Bangalore",
    vehicle_type: "Bike",
    total_deliveries: 25,
    average_rating: 4.7,
    current_status: "Available",
    earnings_today: 500,
    delivery_history: [101, 102, 103]
  },
  {
    rider_id: 1902,
    rider_name: "Sneha",
    city: "Mysore",
    vehicle_type: "Scooter",
    total_deliveries: 15,
    average_rating: 4.3,
    current_status: "Busy",
    earnings_today: 300,
    delivery_history: [104, 105]
  },
  {
    rider_id: 1903,
    rider_name: "Arjun",
    city: "Mangalore",
    vehicle_type: "Bike",
    total_deliveries: 30,
    average_rating: 4.8,
    current_status: "Available",
    earnings_today: 700,
    delivery_history: [106, 107, 108, 109]
  },
  {
    rider_id: 1904,
    rider_name: "Pooja",
    city: "Hubli",
    vehicle_type: "Scooter",
    total_deliveries: 0,
    average_rating: 0,
    current_status: "Offline",
    earnings_today: 0,
    delivery_history: []
  },
  {
    rider_id: 1905,
    rider_name: "Vikram",
    city: "Bangalore",
    vehicle_type: "Bike",
    total_deliveries: 22,
    average_rating: 4.6,
    current_status: "Available",
    earnings_today: 450,
    delivery_history: [110, 111]
  }
])

db.riders.find({
  current_status: "Available",
  average_rating: { $gt: 4.5 }
})

db.riders.updateMany(
  { total_deliveries: { $gt: 20 } },
  { $inc: { earnings_today: 100 } }
)

db.riders.deleteMany({
  current_status: "Offline",
  total_deliveries: 0
})

db.riders.createIndex({ delivery_history: 1 })