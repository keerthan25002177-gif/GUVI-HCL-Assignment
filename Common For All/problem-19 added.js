use elearningDB

db.reviews.insertMany([
  {
    review_id: 1201,
    course_name: "MongoDB Basics",
    student_name: "Ravi",
    rating: 5,
    review_text: "Excellent course!",
    review_date: new Date("2026-04-01"),
    likes_count: 20,
    is_verified_purchase: false
  },
  {
    review_id: 1202,
    course_name: "Python for Beginners",
    student_name: "Sneha",
    rating: 4,
    review_text: "Very helpful.",
    review_date: new Date("2026-03-20"),
    likes_count: 8,
    is_verified_purchase: true
  },
  {
    review_id: 1203,
    course_name: "Advanced MongoDB",
    student_name: "Arjun",
    rating: 5,
    review_text: "Loved the depth!",
    review_date: new Date("2026-04-10"),
    likes_count: 15,
    is_verified_purchase: false
  },
  {
    review_id: 1204,
    course_name: "Java Programming",
    student_name: "Pooja",
    rating: 1,
    review_text: "Not good.",
    review_date: new Date("2023-12-15"),
    likes_count: 2,
    is_verified_purchase: true
  },
  {
    review_id: 1205,
    course_name: "Web Development",
    student_name: "Vikram",
    rating: 3,
    review_text: "Average content.",
    review_date: new Date("2026-02-10"),
    likes_count: 5,
    is_verified_purchase: false
  }
])

db.reviews.find({
  rating: { $gt: 4 },
  likes_count: { $gt: 10 }
})

db.reviews.updateMany(
  { course_name: { $regex: "MongoDB", $options: "i" } },
  { $set: { is_verified_purchase: true } }
)

db.reviews.deleteMany({
  review_date: { $lt: new Date("2024-01-01") },
  rating: 1
})

db.reviews.find(
  {},
  {
    course_name: 1,
    student_name: 1,
    rating: 1,
    _id: 0
  }
).sort({ rating: -1 })