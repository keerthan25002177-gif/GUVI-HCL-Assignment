use warehouseDB

db.products.insertMany([
  {
    product_id: 1601,
    product_name: "LED TV",
    category: "Electronics",
    quantity_in_stock: 20,
    reorder_level: 10,
    supplier_name: "ABC Corp",
    last_restock_date: new Date("2026-03-01"),
    storage_location: "A1"
  },
  {
    product_id: 1602,
    product_name: "Office Chair",
    category: "Furniture",
    quantity_in_stock: 5,
    reorder_level: 10,
    supplier_name: "XYZ Ltd",
    last_restock_date: new Date("2025-12-15"),
    storage_location: "B2"
  },
  {
    product_id: 1603,
    product_name: "Notebook",
    category: "Stationery",
    quantity_in_stock: 0,
    reorder_level: 20,
    supplier_name: "ABC Corp",
    last_restock_date: new Date("2021-11-10"),
    storage_location: "C3"
  },
  {
    product_id: 1604,
    product_name: "Refrigerator",
    category: "Electronics",
    quantity_in_stock: 8,
    reorder_level: 5,
    supplier_name: "LMN Pvt Ltd",
    last_restock_date: new Date("2026-02-20"),
    storage_location: "A2"
  },
  {
    product_id: 1605,
    product_name: "Pen Pack",
    category: "Stationery",
    quantity_in_stock: 15,
    reorder_level: 10,
    supplier_name: "ABC Corp",
    last_restock_date: new Date("2026-01-10"),
    storage_location: "C1"
  }
])

db.products.find({
  $expr: { $lt: ["$quantity_in_stock", "$reorder_level"] }
})

db.products.updateMany(
  { supplier_name: "ABC Corp" },
  { $inc: { quantity_in_stock: 100 } }
)

db.products.deleteMany({
  last_restock_date: { $lt: new Date("2022-01-01") },
  quantity_in_stock: 0
})

db.products.createIndex({ category: 1, quantity_in_stock: 1 })