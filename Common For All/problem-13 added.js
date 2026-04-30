use pollingDB

db.polls.insertMany([
  {
    poll_id: 601,
    question: "Favorite programming language?",
    options: ["Java", "Python", "C++"],
    votes: [10, 25, 15],
    created_date: new Date("2026-04-01"),
    end_date: new Date("2026-05-01"),
    is_active: true
  },
  {
    poll_id: 602,
    question: "Best mobile brand?",
    options: ["Apple", "Samsung", "OnePlus", "Xiaomi"],
    votes: [20, 30, 15, 10],
    created_date: new Date("2026-03-15"),
    end_date: new Date("2026-04-20"),
    is_active: true
  },
  {
    poll_id: 603,
    question: "Preferred work mode?",
    options: ["Remote", "Office", "Hybrid"],
    votes: [40, 10, 25],
    created_date: new Date("2025-12-01"),
    end_date: new Date("2026-01-15"),
    is_active: false
  },
  {
    poll_id: 604,
    question: "Favorite sport?",
    options: ["Cricket", "Football", "Basketball", "Tennis", "Hockey"],
    votes: [50, 20, 10, 5, 8],
    created_date: new Date("2026-04-10"),
    end_date: new Date("2026-06-01"),
    is_active: true
  },
  {
    poll_id: 605,
    question: "Best season?",
    options: ["Summer", "Winter", "Rainy"],
    votes: [15, 25, 20],
    created_date: new Date("2022-11-01"),
    end_date: new Date("2022-12-01"),
    is_active: false
  }
])

db.polls.find({
  is_active: true,
  end_date: { $gt: new Date() }
})

db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
)

db.polls.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_active: false
})

db.polls.find({
  $expr: { $gt: [ { $size: "$options" }, 3 ] }
})
