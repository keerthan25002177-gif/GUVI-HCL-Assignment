use mallDB

db.parking.insertOne({
  slot_id: 1,
  floor: "Ground",
  vehicle_type: "Car",
  is_occupied: false,
  vehicle_number: null
})

db.parking.insertMany([
  {
    slot_id: 2,
    floor: "Ground",
    vehicle_type: "Bike",
    is_occupied: true,
    vehicle_number: "KA01AB1234"
  },
  {
    slot_id: 3,
    floor: "First",
    vehicle_type: "Car",
    is_occupied: false,
    vehicle_number: null
  },
  {
    slot_id: 4,
    floor: "First",
    vehicle_type: "Bike",
    is_occupied: true,
    vehicle_number: "KA05XY5678"
  },
  {
    slot_id: 5,
    floor: "Second",
    vehicle_type: "Car",
    is_occupied: false,
    vehicle_number: null
  },
  {
    slot_id: 6,
    floor: "Second",
    vehicle_type: "Bike",
    is_occupied: true,
    vehicle_number: "KA09MN4321"
  }
])

db.parking.find({ is_occupied: false })

db.parking.find(
  { is_occupied: false },
  { slot_id: 1, floor: 1, vehicle_type: 1, _id: 0 }
)

db.parking.deleteOne({ slot_id: 3 })