use contact_db

db.contacts.insertOne({
  contact_id: 1,
  first_name: "Rahul",
  last_name: "Sharma",
  phone: "9876543210",
  email: "rahul@gmail.com",
  city: "Mumbai"
})

db.contacts.insertMany([
  {
    contact_id: 2,
    first_name: "Anita",
    last_name: "Patel",
    phone: "9123456780",
    email: "anita@gmail.com",
    city: "Ahmedabad"
  },
  {
    contact_id: 3,
    first_name: "Vikram",
    last_name: "Singh",
    phone: "9988776655",
    email: "vikram@gmail.com",
    city: "Mumbai"
  },
  {
    contact_id: 4,
    first_name: "Sneha",
    last_name: "Reddy",
    phone: "9871234567",
    email: "sneha@gmail.com",
    city: "Hyderabad"
  },
  {
    contact_id: 5,
    first_name: "Arjun",
    last_name: "Nair",
    phone: "9012345678",
    email: "arjun@gmail.com",
    city: "Mumbai"
  },
  {
    contact_id: 6,
    first_name: "Priya",
    last_name: "Das",
    phone: "9090909090",
    email: "priya@gmail.com",
    city: "Kolkata"
  }
])

db.contacts.find({ city: "Mumbai" })

db.contacts.find(
  {},
  { _id: 0, first_name: 1, last_name: 1, phone: 1 }
)

db.contacts.deleteOne({ contact_id: 3 })

db.contacts.createIndex({ contact_id: 1 }, { unique: true })

