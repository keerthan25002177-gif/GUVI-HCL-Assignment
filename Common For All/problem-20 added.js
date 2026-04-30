use hospitalDB

db.beds.insertMany([
  {
    bed_id: 1301,
    ward_name: "ICU",
    bed_type: "ICU",
    is_occupied: false,
    patient_name: null,
    admission_date: null,
    expected_discharge_date: null
  },
  {
    bed_id: 1302,
    ward_name: "General",
    bed_type: "General",
    is_occupied: true,
    patient_name: "Ravi",
    admission_date: new Date("2026-04-25"),
    expected_discharge_date: new Date("2026-05-05")
  },
  {
    bed_id: 1303,
    ward_name: "Private",
    bed_type: "Private",
    is_occupied: true,
    patient_name: "Sneha",
    admission_date: new Date(), // today
    expected_discharge_date: new Date("2026-05-10")
  },
  {
    bed_id: 1304,
    ward_name: "ICU",
    bed_type: "ICU",
    is_occupied: false,
    patient_name: null,
    admission_date: null,
    expected_discharge_date: null
  },
  {
    bed_id: 1305,
    ward_name: "General",
    bed_type: "General",
    is_occupied: true,
    patient_name: "Arjun",
    admission_date: new Date("2024-12-20"),
    expected_discharge_date: new Date("2025-01-01")
  }
])

db.beds.find({
  is_occupied: false,
  ward_name: "ICU"
})

db.beds.updateMany(
  {
    admission_date: {
      $gte: new Date(new Date().setHours(0, 0, 0, 0)),
      $lt: new Date(new Date().setHours(23, 59, 59, 999))
    }
  },
  {
    $set: {
      is_occupied: true,
      patient_name: "New Patient"
    }
  }
)

db.beds.deleteMany({
  expected_discharge_date: { $lt: new Date() },
  is_occupied: true
})

db.beds.find(
  {},
  {
    ward_name: 1,
    bed_type: 1,
    is_occupied: 1,
    _id: 0
  }
).sort({ bed_type: 1 })