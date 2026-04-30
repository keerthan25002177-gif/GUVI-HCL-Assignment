use musicDB

db.playlists.insertMany([
  {
    playlist_id: 1701,
    user_name: "Ravi",
    playlist_name: "Workout Hits",
    songs: [
      { title: "Believer", artist: "Imagine Dragons" },
      { title: "Stronger", artist: "Kanye West" }
    ],
    created_date: new Date("2026-04-01"),
    total_duration_minutes: 45,
    is_public: true,
    play_count: 150
  },
  {
    playlist_id: 1702,
    user_name: "Sneha",
    playlist_name: "Chill Vibes",
    songs: [
      { title: "Perfect", artist: "Ed Sheeran" },
      { title: "Let Her Go", artist: "Passenger" }
    ],
    created_date: new Date("2026-03-10"),
    total_duration_minutes: 60,
    is_public: true,
    play_count: 90
  },
  {
    playlist_id: 1703,
    user_name: "Arjun",
    playlist_name: "Party Mix",
    songs: [
      { title: "DJ Waley Babu", artist: "Badshah" },
      { title: "Kala Chashma", artist: "Neha Kakkar" }
    ],
    created_date: new Date("2022-12-01"),
    total_duration_minutes: 70,
    is_public: false,
    play_count: 200
  },
  {
    playlist_id: 1704,
    user_name: "Pooja",
    playlist_name: "Travel Songs",
    songs: [
      { title: "Ilahi", artist: "Arijit Singh" },
      { title: "Safarnama", artist: "Lucky Ali" }
    ],
    created_date: new Date("2026-02-15"),
    total_duration_minutes: 50,
    is_public: true,
    play_count: 120
  },
  {
    playlist_id: 1705,
    user_name: "Vikram",
    playlist_name: "Old Classics",
    songs: [
      { title: "Lag Ja Gale", artist: "Lata Mangeshkar" },
      { title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar" }
    ],
    created_date: new Date("2021-05-01"),
    total_duration_minutes: 80,
    is_public: false,
    play_count: 60
  }
])

db.playlists.find({
  is_public: true,
  play_count: { $gt: 100 }
})

db.playlists.updateOne(
  { playlist_id: 1701 },
  { $inc: { play_count: 1 } }
)

db.playlists.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_public: false
})

db.playlists.aggregate([
  {
    $group: {
      _id: "$user_name",
      avg_duration: { $avg: "$total_duration_minutes" }
    }
  }
])