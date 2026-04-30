use hostel_db

db.hostel.insertOne({
  student_id: 1,
  name: "Ravi Kumar",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2026-04-20")
})

db.hostel.insertMany([
  {
    student_id: 2,
    name: "Anjali Sharma",
    room_number: 102,
    block_name: "A",
    bed_number: 2,
    check_in_date: new Date("2026-04-21")
  },
  {
    student_id: 3,
    name: "Kiran Reddy",
    room_number: 201,
    block_name: "B",
    bed_number: 1,
    check_in_date: new Date("2026-04-22")
  },
  {
    student_id: 4,
    name: "Rahul Nair",
    room_number: 202,
    block_name: "B",
    bed_number: 2,
    check_in_date: new Date("2026-04-23")
  },
  {
    student_id: 5,
    name: "Sneha Patel",
    room_number: 103,
    block_name: "A",
    bed_number: 1,
    check_in_date: new Date("2026-04-24")
  },
  {
    student_id: 6,
    name: "Arjun Singh",
    room_number: 301,
    block_name: "C",
    bed_number: 1,
    check_in_date: new Date("2026-04-25")
  }
])

db.hostel.find({ block_name: "A" })

db.hostel.find(
  {},
  { _id: 0, name: 1, room_number: 1, block_name: 1 }
)

db.hostel.deleteOne({ student_id: 3 })