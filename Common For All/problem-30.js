db.defects.insertMany([
  {
    defect_id: 3001,
    product_name: "Smartphone",
    batch_number: "B001",
    defect_type: "Functional",
    detection_date: new Date("2026-04-01"),
    severity: "High",
    quantity_affected: 50,
    root_cause: "Battery issue",
    status: "Open",
    resolution_date: null
  },
  {
    defect_id: 3002,
    product_name: "Laptop",
    batch_number: "B002",
    defect_type: "Cosmetic",
    detection_date: new Date("2026-03-15"),
    severity: "Low",
    quantity_affected: 20,
    root_cause: "Scratch",
    status: "Resolved",
    resolution_date: new Date("2026-03-20")
  },
  {
    defect_id: 3003,
    product_name: "Refrigerator",
    batch_number: "B003",
    defect_type: "Safety",
    detection_date: new Date("2026-02-10"),
    severity: "High",
    quantity_affected: 10,
    root_cause: "Gas leakage",
    status: "Open",
    resolution_date: null
  },
  {
    defect_id: 3004,
    product_name: "Washing Machine",
    batch_number: "B004",
    defect_type: "Functional",
    detection_date: new Date("2021-12-01"),
    severity: "Medium",
    quantity_affected: 30,
    root_cause: "Motor failure",
    status: "Resolved",
    resolution_date: new Date("2022-01-10")
  },
  {
    defect_id: 3005,
    product_name: "Microwave",
    batch_number: "B005",
    defect_type: "Cosmetic",
    detection_date: new Date("2026-04-10"),
    severity: "Medium",
    quantity_affected: 15,
    root_cause: "Paint issue",
    status: "Investigating",
    resolution_date: null
  }
])

db.defects.find({
  severity: "High",
  status: "Open"
})

db.defects.updateMany(
  { root_cause: { $ne: null } },
  {
    $set: {
      status: "Resolved",
      resolution_date: new Date()
    }
  }
)

db.defects.deleteMany({
  detection_date: { $lt: new Date("2022-01-01") },
  status: "Resolved"
})

db.defects.aggregate([
  {
    $group: {
      _id: "$defect_type",
      total_quantity: { $sum: "$quantity_affected" }
    }
  },
  { $sort: { total_quantity: -1 } }
])