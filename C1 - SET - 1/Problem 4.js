 db.ProductionLogs.insertOne({
  machineID: "MAC_X1",
  productionLineID: "LINE_A",
  timestamp_hour: new Date("2026-04-30T10:00:00Z"),
  readings: [
    { time: new Date("2026-04-30T10:05:00Z"), temp: 75.5, outputRate: 120, status: "Active" },
    { time: new Date("2026-04-30T10:10:00Z"), temp: 78.2, outputRate: 115, status: "Active" },
    { time: new Date("2026-04-30T10:15:00Z"), temp: 95.0, outputRate: 40, status: "Warning" }
  ],
  avgTemp: 82.9
});
db.ProductionLogs.find({
  machineID: "MAC_X1",
  timestamp_hour: {
    $gte: new Date("2026-04-30T00:00:00Z"),
    $lte: new Date("2026-04-30T23:59:59Z")
  }
}).sort({ timestamp_hour: 1 });

 db.MaintenanceLogs.insertOne({
  machineID: "MAC_X1",
  technician: "Sarah Connor",
  activity: "Cooling fan replacement",
  date: new Date(),
  nextScheduled: new Date("2026-10-30")
});

 // 1. Mark machine as needing attention
db.Machines.updateOne(
  { machineID: "MAC_X1" },
  { $set: { operationalStatus: "Unstable", lastAlert: "High Temperature" } }
);

// 2. Create an alert log
db.Alerts.insertOne({
  machineID: "MAC_X1",
  severity: "Critical",
  issue: "Temperature exceeded 90°C",
  timestamp: new Date()
});
 db.ProductionLogs.aggregate([
  { $unwind: "$readings" },
  {
    $group: {
      _id: "$productionLineID",
      totalActualOutput: { $sum: "$readings.outputRate" },
      avgTemp: { $avg: "$readings.temp" }
    }
  }
]);
 db.ProductionLogs.aggregate([
  { $unwind: "$readings" },
  { $match: { "readings.status": { $in: ["Down", "Error"] } } },
  {
    $group: {
      _id: "$machineID",
      downtimeIncidents: { $sum: 1 }
    }
  },
  { $sort: { downtimeIncidents: -1 } }
]);
 db.ProductionLogs.aggregate([
  { $unwind: "$readings" },
  {
    $project: {
      hour: { $hour: "$readings.time" },
      output: "$readings.outputRate"
    }
  },
  {
    $group: {
      _id: "$hour",
      hourlyAvgOutput: { $avg: "$output" }
    }
  },
  { $sort: { "_id": 1 } }
]);