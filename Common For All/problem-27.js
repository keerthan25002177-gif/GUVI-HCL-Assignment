use hotelDB

db.feedback.insertMany([
  {
    feedback_id: 2001,
    guest_name: "Ravi",
    hotel_name: "Grand Palace",
    room_number: 101,
    stay_dates: ["2026-04-01", "2026-04-05"],
    cleanliness_rating: 5,
    service_rating: 4,
    overall_rating: 5,
    comments: "Excellent stay!",
    feedback_date: new Date("2026-04-06"),
    would_recommend: true
  },
  {
    feedback_id: 2002,
    guest_name: "Sneha",
    hotel_name: "Sea View Resort",
    room_number: 202,
    stay_dates: ["2026-03-10", "2026-03-12"],
    cleanliness_rating: 3,
    service_rating: 2,
    overall_rating: 2,
    comments: "Average experience",
    feedback_date: new Date("2026-03-13"),
    would_recommend: false
  },
  {
    feedback_id: 2003,
    guest_name: "Arjun",
    hotel_name: "Mountain Inn",
    room_number: 303,
    stay_dates: ["2026-04-10", "2026-04-15"],
    cleanliness_rating: 4,
    service_rating: 5,
    overall_rating: 5,
    comments: "Great service!",
    feedback_date: new Date("2026-04-16"),
    would_recommend: true
  },
  {
    feedback_id: 2004,
    guest_name: "Pooja",
    hotel_name: "City Lodge",
    room_number: 404,
    stay_dates: ["2022-12-01", "2022-12-03"],
    cleanliness_rating: 1,
    service_rating: 1,
    overall_rating: 1,
    comments: "Very bad experience",
    feedback_date: new Date("2022-12-04"),
    would_recommend: false
  },
  {
    feedback_id: 2005,
    guest_name: "Vikram",
    hotel_name: "Grand Palace",
    room_number: 105,
    stay_dates: ["2026-04-20", "2026-04-22"],
    cleanliness_rating: 4,
    service_rating: 4,
    overall_rating: 4,
    comments: "Good stay",
    feedback_date: new Date("2026-04-23"),
    would_recommend: true
  }
])

db.feedback.find({
  overall_rating: { $lt: 3 },
  would_recommend: false
})

db.feedback.updateMany(
  { overall_rating: { $gt: 4 } },
  { $set: { would_recommend: true } }
)

db.feedback.deleteMany({
  feedback_date: { $lt: new Date("2023-01-01") },
  overall_rating: 1
})

db.feedback.aggregate([
  {
    $group: {
      _id: "$hotel_name",
      avg_cleanliness: { $avg: "$cleanliness_rating" },
      avg_service: { $avg: "$service_rating" }
    }
  }
])