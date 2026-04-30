// Inserting a Passenger
db.Passengers.insertOne({
  _id: "P101",
  name: "Arjun Mehta",
  email: "arjun@example.com",
  smartCardID: "SC-9988"
});

// Inserting a Journey (TicketLog)
db.TicketLogs.insertMany([
  {
    logID: "L001",
    passengerID: "P101",
    tripID: "TRIP_404",
    action: "CHECK_IN",
    stopID: "STOP_A",
    timestamp: new Date("2026-04-30T08:30:00Z"),
    location: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    logID: "L002",
    passengerID: "P101",
    tripID: "TRIP_404",
    action: "CHECK_OUT",
    stopID: "STOP_C",
    timestamp: new Date("2026-04-30T09:15:00Z"),
    location: { type: "Point", coordinates: [77.6101, 12.9307] }
  }
]);

db.TicketLogs.aggregate([
  { $match: { passengerID: "P101" } },
  { $sort: { timestamp: -1 } },
  {
    $lookup: {
      from: "Trips",
      localField: "tripID",
      foreignField: "_id",
      as: "tripDetails"
    }
  },
  { $unwind: "$tripDetails" }
]);

db.Vehicles.updateOne(
  { vehicleID: "BUS_45" },
  { 
    $set: { 
      lastLocation: { type: "Point", coordinates: [77.5806, 12.9279] },
      lastUpdated: new Date() 
    }
  }
);

db.Trips.updateOne(
  { _id: "TRIP_404" },
  { $set: { status: "Delayed", delayMinutes: 10 } }
);

db.TicketLogs.aggregate([
  { $match: { action: "CHECK_IN" } },
  {
    $lookup: {
      from: "Trips",
      localField: "tripID",
      foreignField: "_id",
      as: "trip"
    }
  },
  { $unwind: "$trip" },
  { $group: { _id: "$trip.routeID", passengerCount: { $sum: 1 } } },
  { $sort: { passengerCount: -1 } }
]);

db.TicketLogs.aggregate([
  { $sort: { passengerID: 1, timestamp: 1 } },
  {
    $group: {
      _id: { passengerID: "$passengerID", tripID: "$tripID" },
      checkIn: { $min: "$timestamp" },
      checkOut: { $max: "$timestamp" }
    }
  },
  { $project: { travelTimeMs: { $subtract: ["$checkOut", "$checkIn"] } } },
  { $group: { _id: "$_id.tripID", avgTime: { $avg: "$travelTimeMs" } } }
]);

db.TicketLogs.aggregate([
  { $match: { action: "CHECK_IN" } },
  {
    $project: {
      hour: { $hour: "$timestamp" }
    }
  },
  { $group: { _id: "$hour", totalPassengers: { $sum: 1 } } },
  { $sort: { totalPassengers: -1 } }
]);