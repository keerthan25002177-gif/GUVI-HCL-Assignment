use bookClubDB

db.reading.insertMany([
  {
    record_id: 801,
    member_name: "Ravi",
    book_title: "The Alchemist",
    genre: "Fiction",
    pages_read: 197,
    total_pages: 197,
    start_date: new Date("2026-04-01"),
    completion_date: new Date("2026-04-05"),
    is_completed: true
  },
  {
    record_id: 802,
    member_name: "Sneha",
    book_title: "Atomic Habits",
    genre: "Self-Help",
    pages_read: 120,
    total_pages: 320,
    start_date: new Date("2026-04-02"),
    completion_date: null,
    is_completed: false
  },
  {
    record_id: 803,
    member_name: "Arjun",
    book_title: "Harry Potter",
    genre: "Fiction",
    pages_read: 350,
    total_pages: 500,
    start_date: new Date("2026-04-03"),
    completion_date: null,
    is_completed: false
  },
  {
    record_id: 804,
    member_name: "Pooja",
    book_title: "Sapiens",
    genre: "History",
    pages_read: 450,
    total_pages: 450,
    start_date: new Date("2022-12-01"),
    completion_date: new Date("2023-01-10"),
    is_completed: true
  },
  {
    record_id: 805,
    member_name: "Vikram",
    book_title: "The Hobbit",
    genre: "Fiction",
    pages_read: 90,
    total_pages: 310,
    start_date: new Date("2026-04-04"),
    completion_date: null,
    is_completed: false
  }
])

db.reading.find({
  is_completed: false,
  pages_read: { $gt: 100 }
})

db.reading.updateMany(
  { completion_date: { $ne: null } },
  { $set: { is_completed: true } }
)

db.reading.deleteMany({
  start_date: { $lt: new Date("2023-01-01") },
  is_completed: false
})

db.reading.find({
  genre: "Fiction",
  is_completed: true
})