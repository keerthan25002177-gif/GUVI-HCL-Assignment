use serviceDB

db.services.insertMany([
  {
    service_id: 701,
    customer_name: "Ravi",
    vehicle_number: "KA01AB1234",
    service_type: "Oil Change",
    service_date: new Date("2026-07-15"),
    cost: 400,
    status: "Completed"
  },
  {
    service_id: 702,
    customer_name: "Sneha",
    vehicle_number: "KA05XY5678",
    service_type: "Repair",
    service_date: new Date("2026-06-20"),
    cost: 1500,
    status: "InProgress"
  },
  {
    service_id: 703,
    customer_name: "Arjun",
    vehicle_number: "KA09MN4321",
    service_type: "Inspection",
    service_date: new Date("2026-08-05"),
    cost: 700,
    status: "Scheduled"
  },
  {
    service_id: 704,
    customer_name: "Pooja",
    vehicle_number: "KA03CD9876",
    service_type: "Repair",
    service_date: new Date("2024-12-15"),
    cost: 300,
    status: "InProgress"
  },
  {
    service_id: 705,
    customer_name: "Vikram",
    vehicle_number: "KA11EF2222",
    service_type: "Oil Change",
    service_date: new Date("2026-05-10"),
    cost: 450,
    status: "Completed"
  }
])

db.services.find({
  status: "InProgress",
  service_date: { $lt: new Date("2026-08-01") }
})

db.services.updateMany(
  { service_date: { $lt: new Date("2025-01-01") } },
  { $set: { status: "Completed" } }
)

db.services.deleteMany({
  status: "Completed",
  cost: { $lt: 500 }
})

db.services.find(
  {},
  {
    customer_name: 1,
    service_type: 1,
    cost: 1,
    _id: 0
  }
).sort({ cost: -1 })