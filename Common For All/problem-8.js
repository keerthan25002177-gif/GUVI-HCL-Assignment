use retailDB

db.giftcards.insertOne({
  card_id: 101,
  recipient_name: "Ravi",
  sender_name: "Amit",
  amount: 1000,
  purchase_date: new Date("2026-04-01"),
  expiry_date: new Date("2026-12-31"),
  is_used: false
})

db.giftcards.insertMany([
  {
    card_id: 102,
    recipient_name: "Sneha",
    sender_name: "Kiran",
    amount: 500,
    purchase_date: new Date("2026-03-15"),
    expiry_date: new Date("2026-10-15"),
    is_used: false
  },
  {
    card_id: 103,
    recipient_name: "Arjun",
    sender_name: "Rahul",
    amount: 1500,
    purchase_date: new Date("2026-01-10"),
    expiry_date: new Date("2026-05-10"),
    is_used: true
  },
  {
    card_id: 104,
    recipient_name: "Pooja",
    sender_name: "Neha",
    amount: 2000,
    purchase_date: new Date("2026-02-20"),
    expiry_date: new Date("2026-11-20"),
    is_used: false
  },
  {
    card_id: 105,
    recipient_name: "Vikram",
    sender_name: "Suresh",
    amount: 750,
    purchase_date: new Date("2026-04-05"),
    expiry_date: new Date("2026-08-05"),
    is_used: false
  },
  {
    card_id: 106,
    recipient_name: "Anita",
    sender_name: "Meena",
    amount: 1200,
    purchase_date: new Date("2026-03-01"),
    expiry_date: new Date("2026-06-01"),
    is_used: true
  }
])

db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
})

db.giftcards.find(
  {
    is_used: false,
    expiry_date: { $gt: new Date() }
  },
  {
    recipient_name: 1,
    amount: 1,
    expiry_date: 1,
    _id: 0
  }
)

db.giftcards.deleteOne({ card_id: 103 })