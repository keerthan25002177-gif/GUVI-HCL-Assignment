use pharmacyDB

db.prescriptions.insertMany([
  {
    prescription_id: 901,
    patient_name: "Ravi",
    doctor_name: "Dr. Sharma",
    medicine_name: "Paracetamol",
    dosage: "500mg",
    issue_date: new Date("2026-04-01"),
    expiry_date: new Date("2026-06-01"),
    status: "Active"
  },
  {
    prescription_id: 902,
    patient_name: "Sneha",
    doctor_name: "Dr. Mehta",
    medicine_name: "Amoxicillin",
    dosage: "250mg",
    issue_date: new Date("2026-03-15"),
    expiry_date: new Date("2026-04-10"),
    status: "Expired"
  },
  {
    prescription_id: 903,
    patient_name: "Arjun",
    doctor_name: "Dr. Reddy",
    medicine_name: "Ibuprofen",
    dosage: "400mg",
    issue_date: new Date("2026-04-05"),
    expiry_date: new Date("2026-05-05"),
    status: "Active"
  },
  {
    prescription_id: 904,
    patient_name: "Pooja",
    doctor_name: "Dr. Khan",
    medicine_name: "Cough Syrup",
    dosage: "10ml",
    issue_date: new Date("2023-12-01"),
    expiry_date: new Date("2024-01-01"),
    status: "Fulfilled"
  },
  {
    prescription_id: 905,
    patient_name: "Vikram",
    doctor_name: "Dr. Patel",
    medicine_name: "Vitamin D",
    dosage: "1000 IU",
    issue_date: new Date("2026-04-10"),
    expiry_date: new Date("2026-07-10"),
    status: "Active"
  }
])

db.prescriptions.find({
  status: "Active",
  expiry_date: { $gt: new Date() }
})

db.prescriptions.updateMany(
  { expiry_date: { $lt: new Date() } },
  { $set: { status: "Expired" } }
)

db.prescriptions.deleteMany({
  status: "Fulfilled",
  issue_date: { $lt: new Date("2024-01-01") }
})

db.prescriptions.find(
  {},
  {
    patient_name: 1,
    medicine_name: 1,
    status: 1,
    _id: 0
  }
).sort({ issue_date: -1 })