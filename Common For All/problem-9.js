use courierDB

db.parcels.insertOne({
  parcel_id: 201,
  sender_name: "Ravi",
  receiver_name: "Amit",
  weight: 2.5,
  shipping_cost: 150,
  booking_date: new Date("2026-04-01"),
  delivery_status: "Pending"
})

db.parcels.insertMany([
  {
    parcel_id: 202,
    sender_name: "Sneha",
    receiver_name: "Kiran",
    weight: 1.2,
    shipping_cost: 100,
    booking_date: new Date("2026-04-10"),
    delivery_status: "Shipped"
  },
  {
    parcel_id: 203,
    sender_name: "Arjun",
    receiver_name: "Rahul",
    weight: 3.0,
    shipping_cost: 200,
    booking_date: new Date("2026-04-05"),
    delivery_status: "Pending"
  },
  {
    parcel_id: 204,
    sender_name: "Pooja",
    receiver_name: "Neha",
    weight: 0.8,
    shipping_cost: 80,
    booking_date: new Date("2026-04-12"),
    delivery_status: "Delivered"
  },
  {
    parcel_id: 205,
    sender_name: "Vikram",
    receiver_name: "Suresh",
    weight: 2.0,
    shipping_cost: 140,
    booking_date: new Date("2026-04-15"),
    delivery_status: "Pending"
  },
  {
    parcel_id: 206,
    sender_name: "Anita",
    receiver_name: "Meena",
    weight: 1.5,
    shipping_cost: 120,
    booking_date: new Date("2026-04-18"),
    delivery_status: "Shipped"
  }
])

db.parcels.find({ delivery_status: "Pending" })

db.parcels.find(
  { delivery_status: "Pending" },
  {
    sender_name: 1,
    receiver_name: 1,
    shipping_cost: 1,
    _id: 0
  }
)

db.parcels.deleteOne({ parcel_id: 203 })