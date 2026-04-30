use gymDB

db.equipment.insertMany([
  {
    equip_id: 1101,
    equip_name: "Treadmill",
    category: "Cardio",
    purchase_date: new Date("2018-06-01"),
    last_maintenance_date: new Date("2026-03-01"),
    next_maintenance_date: new Date("2026-06-01"),
    condition: "Good"
  },
  {
    equip_id: 1102,
    equip_name: "Bench Press",
    category: "Strength",
    purchase_date: new Date("2014-05-10"),
    last_maintenance_date: new Date("2024-12-01"),
    next_maintenance_date: new Date("2025-03-01"),
    condition: "OutOfOrder"
  },
  {
    equip_id: 1103,
    equip_name: "Elliptical",
    category: "Cardio",
    purchase_date: new Date("2020-01-15"),
    last_maintenance_date: new Date("2026-02-10"),
    next_maintenance_date: new Date("2026-05-10"),
    condition: "NeedsService"
  },
  {
    equip_id: 1104,
    equip_name: "Dumbbells Set",
    category: "Strength",
    purchase_date: new Date("2019-08-20"),
    last_maintenance_date: new Date("2025-02-01"),
    next_maintenance_date: new Date("2025-08-01"),
    condition: "Good"
  },
  {
    equip_id: 1105,
    equip_name: "Stationary Bike",
    category: "Cardio",
    purchase_date: new Date("2013-03-25"),
    last_maintenance_date: new Date("2023-11-01"),
    next_maintenance_date: new Date("2024-02-01"),
    condition: "OutOfOrder"
  }
])

db.equipment.find({
  condition: { $in: ["NeedsService", "OutOfOrder"] }
})

db.equipment.updateMany(
  { last_maintenance_date: { $gt: new Date("2025-01-01") } },
  { $set: { condition: "Good" } }
)

db.equipment.deleteMany({
  purchase_date: { $lt: new Date("2015-01-01") },
  condition: "OutOfOrder"
})

db.equipment.find().sort({ next_maintenance_date: 1 })