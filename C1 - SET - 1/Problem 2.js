 db.Tickets.insertOne({
  _id: "TICK-7788",
  customerID: "CUST_001",
  agentID: "AGNT_202",
  categoryID: "CAT_BILLING",
  subject: "Double charge on subscription",
  status: "Open",
  priority: "High",
  createdAt: new Date("2026-04-28T10:00:00Z"),
  interactions: [
    {
      type: "Email",
      sender: "Customer",
      message: "I was charged twice for April.",
      timestamp: new Date("2026-04-28T10:00:00Z")
    },
    {
      type: "Internal Note",
      sender: "System",
      message: "Auto-assigned to Billing Dept.",
      timestamp: new Date("2026-04-28T10:05:00Z")
    }
  ]
});
 db.Tickets.find({
  customerID: "CUST_001",
  status: { $in: ["Open", "Escalated"] }
}).sort({ priority: -1, createdAt: 1 });
 db.Tickets.updateOne(
  { _id: "TICK-7788" },
  { 
    $set: { status: "In Progress" },
    $push: { 
      interactions: {
        type: "Status Change",
        sender: "AGNT_202",
        message: "Moving ticket to In Progress.",
        timestamp: new Date()
      }
    }
  }
);
 db.Tickets.updateOne(
  { _id: "TICK-7788" },
  { $set: { agentID: "AGNT_305", status: "Escalated" } }
);
 db.Tickets.aggregate([
  { $match: { status: "Resolved", resolvedAt: { $exists: true } } },
  { 
    $project: { 
      duration: { $subtract: ["$resolvedAt", "$createdAt"] } 
    } 
  },
  { 
    $group: { 
      _id: null, 
      avgResolutionTimeHours: { $avg: { $divide: ["$duration", 3600000] } } 
    } 
  }
]);
 db.Tickets.aggregate([
  { $match: { status: "Resolved" } },
  { $group: { _id: "$agentID", resolvedCount: { $sum: 1 } } },
  { $sort: { resolvedCount: -1 } },
  { $limit: 5 },
  {
    $lookup: {
      from: "Agents",
      localField: "_id",
      foreignField: "_id",
      as: "agentDetails"
    }
  }
]);
 db.Tickets.aggregate([
  { $group: { _id: "$categoryID", totalTickets: { $sum: 1 } } },
  { $sort: { totalTickets: -1 } }
]);
