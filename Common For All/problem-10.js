use fitnessDB

db.workouts.insertOne({
  workout_id: 301,
  exercise_name: "Running",
  duration_minutes: 30,
  calories_burned: 250,
  date: new Date("2026-04-01"),
  intensity: "High"
})

db.workouts.insertMany([
  {
    workout_id: 302,
    exercise_name: "Cycling",
    duration_minutes: 45,
    calories_burned: 300,
    date: new Date("2026-04-02"),
    intensity: "Medium"
  },
  {
    workout_id: 303,
    exercise_name: "Yoga",
    duration_minutes: 60,
    calories_burned: 150,
    date: new Date("2026-04-03"),
    intensity: "Low"
  },
  {
    workout_id: 304,
    exercise_name: "Swimming",
    duration_minutes: 40,
    calories_burned: 350,
    date: new Date("2026-04-04"),
    intensity: "High"
  },
  {
    workout_id: 305,
    exercise_name: "Weight Training",
    duration_minutes: 50,
    calories_burned: 400,
    date: new Date("2026-04-05"),
    intensity: "High"
  },
  {
    workout_id: 306,
    exercise_name: "Walking",
    duration_minutes: 30,
    calories_burned: 120,
    date: new Date("2026-04-06"),
    intensity: "Low"
  }
])

db.workouts.find({ intensity: "High" })

db.workouts.find(
  { intensity: "High" },
  {
    exercise_name: 1,
    duration_minutes: 1,
    calories_burned: 1,
    _id: 0
  }
)

db.workouts.deleteOne({ workout_id: 303 })