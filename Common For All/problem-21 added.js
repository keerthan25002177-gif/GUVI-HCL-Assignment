use ecommerceDB

db.wishlist.insertMany([
  {
    wishlist_id: 1401,
    customer_name: "Ravi",
    product_name: "Smartphone",
    product_category: "Electronics",
    price: 15000,
    added_date: new Date("2026-04-01"),
    notify_when_available: true
  },
  {
    wishlist_id: 1402,
    customer_name: "Sneha",
    product_name: "Headphones",
    product_category: "Electronics",
    price: 1800,
    added_date: new Date("2026-03-15"),
    notify_when_available: true
  },
  {
    wishlist_id: 1403,
    customer_name: "Arjun",
    product_name: "Shoes",
    product_category: "Fashion",
    price: 2500,
    added_date: new Date("2026-02-10"),
    notify_when_available: false
  },
  {
    wishlist_id: 1404,
    customer_name: "Pooja",
    product_name: "Watch",
    product_category: "Accessories",
    price: 1200,
    added_date: new Date("2023-12-20"),
    notify_when_available: true
  },
  {
    wishlist_id: 1405,
    customer_name: "Ravi",
    product_name: "Laptop Bag",
    product_category: "Electronics",
    price: 900,
    added_date: new Date("2026-04-10"),
    notify_when_available: true
  }
])

db.wishlist.find({
  price: { $lt: 2000 },
  notify_when_available: true
})

db.wishlist.updateMany(
  { product_category: "Electronics" },
  { $mul: { price: 0.8 } }
)

db.wishlist.deleteMany({
  added_date: { $lt: new Date("2024-01-01") }
})

db.wishlist.aggregate([
  {
    $group: {
      _id: "$customer_name",
      total_items: { $sum: 1 }
    }
  }
])