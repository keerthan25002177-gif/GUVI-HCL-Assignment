use socialDB

db.followers.insertMany([
  {
    follower_id: 2201,
    follower_name: "Ravi",
    followed_since: new Date("2026-01-01"),
    engagement_score: 85,
    is_active: true,
    location: "Bangalore",
    interests: ["Fitness", "Travel"],
    last_interaction_date: new Date("2026-04-20")
  },
  {
    follower_id: 2202,
    follower_name: "Sneha",
    followed_since: new Date("2025-05-10"),
    engagement_score: 90,
    is_active: true,
    location: "Mysore",
    interests: ["Food", "Travel"],
    last_interaction_date: new Date("2026-04-18")
  },
  {
    follower_id: 2203,
    follower_name: "Arjun",
    followed_since: new Date("2023-03-15"),
    engagement_score: 60,
    is_active: true,
    location: "Chennai",
    interests: ["Tech", "Gaming"],
    last_interaction_date: new Date("2024-12-01")
  },
  {
    follower_id: 2204,
    follower_name: "Pooja",
    followed_since: new Date("2021-08-20"),
    engagement_score: 15,
    is_active: false,
    location: "Delhi",
    interests: ["Fashion", "Beauty"],
    last_interaction_date: new Date("2022-05-01")
  },
  {
    follower_id: 2205,
    follower_name: "Vikram",
    followed_since: new Date("2026-02-10"),
    engagement_score: 95,
    is_active: true,
    location: "Mumbai",
    interests: ["Fitness", "Tech"],
    last_interaction_date: new Date("2026-04-22")
  }
])

db.followers.find({
  engagement_score: { $gt: 80 },
  is_active: true
})

db.followers.updateMany(
  { last_interaction_date: { $lt: new Date("2025-01-01") } },
  { $set: { is_active: false } }
)

db.followers.deleteMany({
  followed_since: { $lt: new Date("2022-01-01") },
  engagement_score: { $lt: 20 }
})

db.followers.aggregate([
  { $unwind: "$interests" },
  {
    $group: {
      _id: "$interests",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 1 }
])