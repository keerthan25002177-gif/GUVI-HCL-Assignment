use companyDB

db.attendance.insertMany([
  {
    record_id: 501,
    emp_name: "Ravi",
    department: "IT",
    date: new Date("2026-04-01"),
    status: "Present",
    check_in_time: "09:00"
  },
  {
    record_id: 502,
    emp_name: "Sneha",
    department: "HR",
    date: new Date("2026-04-01"),
    status: "Leave",
    check_in_time: null
  },
  {
    record_id: 503,
    emp_name: "Arjun",
    department: "IT",
    date: new Date("2026-04-01"),
    status: "Absent",
    check_in_time: null
  },
  {
    record_id: 504,
    emp_name: "Pooja",
    department: "Finance",
    date: new Date("2023-12-20"),
    status: "Leave",
    check_in_time: null
  },
  {
    record_id: 505,
    emp_name: "Vikram",
    department: "IT",
    date: new Date("2026-04-02"),
    status: "Absent",
    check_in_time: "09:30"
  }
])

db.attendance.find({
  status: "Absent",
  department: "IT"
})

db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
)

db.attendance.deleteMany({
  date: { $lt: new Date("2024-01-01") },
  status: "Leave"
})

db.attendance.find({ status: "Present" })
  .sort({ date: 1 })