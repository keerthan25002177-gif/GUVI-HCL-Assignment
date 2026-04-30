use expense_db

db.expenses.insertOne({
  expense_id: 1,
  category: "Food",
  amount: 250,
  date: new Date("2026-04-29"),
  payment_method: "UPI",
  note: "Lunch at restaurant"
})

db.expenses.insertMany([
  {
    expense_id: 2,
    category: "Transport",
    amount: 600,
    date: new Date("2026-04-28"),
    payment_method: "Cash",
    note: "Bus pass"
  },
  {
    expense_id: 3,
    category: "Entertainment",
    amount: 800,
    date: new Date("2026-04-27"),
    payment_method: "Card",
    note: "Movie tickets"
  },
  {
    expense_id: 4,
    category: "Bills",
    amount: 1200,
    date: new Date("2026-04-26"),
    payment_method: "UPI",
    note: "Electricity bill"
  },
  {
    expense_id: 5,
    category: "Food",
    amount: 450,
    date: new Date("2026-04-25"),
    payment_method: "Cash",
    note: "Dinner"
  },
  {
    expense_id: 6,
    category: "Transport",
    amount: 700,
    date: new Date("2026-04-24"),
    payment_method: "UPI",
    note: "Taxi fare"
  }
])

db.expenses.find({ amount: { $gt: 500 } })

db.expenses.find(
  {},
  { _id: 0, category: 1, amount: 1, date: 1 }
)

db.expenses.deleteOne({ expense_id: 3 })

