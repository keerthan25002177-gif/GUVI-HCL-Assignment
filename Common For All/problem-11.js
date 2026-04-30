use streamingDB

db.subscriptions.insertMany([
  {
    sub_id: 401,
    user_name: "Ravi",
    plan_type: "Basic",
    monthly_fee: 199,
    start_date: new Date("2026-01-01"),
    renewal_date: new Date("2026-02-01"),
    is_active: true
  },
  {
    sub_id: 402,
    user_name: "Sneha",
    plan_type: "Premium",
    monthly_fee: 599,
    start_date: new Date("2026-03-01"),
    renewal_date: new Date("2026-04-01"),
    is_active: true
  },
  {
    sub_id: 403,
    user_name: "Arjun",
    plan_type: "Standard",
    monthly_fee: 399,
    start_date: new Date("2025-12-01"),
    renewal_date: new Date("2026-01-01"),
    is_active: false
  },
  {
    sub_id: 404,
    user_name: "Pooja",
    plan_type: "Premium",
    monthly_fee: 699,
    start_date: new Date("2026-02-15"),
    renewal_date: new Date("2026-03-15"),
    is_active: true
  },
  {
    sub_id: 405,
    user_name: "Vikram",
    plan_type: "Basic",
    monthly_fee: 149,
    start_date: new Date("2024-10-01"),
    renewal_date: new Date("2024-12-01"),
    is_active: false
  }
])

db.subscriptions.find({
  is_active: true,
  plan_type: "Premium"
})

db.subscriptions.updateMany(
  { plan_type: "Basic" },
  { $inc: { monthly_fee: 100 } }
)

db.subscriptions.deleteMany({
  is_active: false,
  renewal_date: { $lt: new Date("2025-01-01") }
})

v