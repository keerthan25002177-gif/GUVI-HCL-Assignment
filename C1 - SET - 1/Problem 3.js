 // Inserting a Hotel with Room Types
db.Hotels.insertOne({
  _id: "HTL_99",
  name: "Grand Azure Resort",
  location: { city: "Maldives", country: "MV" },
  rooms: [
    { type: "Deluxe Ocean", basePrice: 400, capacity: 2 },
    { type: "Sunset Villa", basePrice: 750, capacity: 4 }
  ]
});

// Inserting a Booking with Pricing
db.Bookings.insertOne({
  _id: "BOOK_101",
  hotelID: "HTL_99",
  customerID: "C_55",
  roomType: "Sunset Villa",
  checkIn: new Date("2026-06-01"),
  checkOut: new Date("2026-06-07"),
  totalPrice: 4800,
  status: "Confirmed"
});
 db.Hotels.aggregate([
  { $match: { "location.city": "Maldives" } },
  {
    $lookup: {
      from: "Bookings",
      let: { hId: "$_id" },
      pipeline: [
        { $match: {
            $expr: {
              $and: [
                { $eq: ["$hotelID", "$$hId"] },
                { $ne: ["$status", "Cancelled"] },
                { $lt: ["$checkIn", new Date("2026-06-10")] },
                { $gt: ["$checkOut", new Date("2026-06-01")] }
              ]
            }
        }}
      ],
      as: "conflictingBookings"
    }
  },
  { $match: { conflictingBookings: { $size: 0 } } } // Simplistic check: returns hotels with zero conflicts
]);
 db.Bookings.updateOne(
  { _id: "BOOK_101" },
  { $set: { status: "Cancelled", cancelledAt: new Date() } }
);
 // 1. Update current room price
db.Hotels.updateOne(
  { _id: "HTL_99", "rooms.type": "Sunset Villa" },
  { $set: { "rooms.$.currentPrice": 850 } }
);

// 2. Log to history for analytics
db.PricingHistory.insertOne({
  hotelID: "HTL_99",
  roomType: "Sunset Villa",
  price: 850,
  reason: "High Demand/Seasonality",
  timestamp: new Date()
});
db.Bookings.aggregate([
  { $match: { status: "Confirmed" } },
  { $group: { _id: "$hotelID", occupiedRooms: { $sum: 1 } } },
  {
    $lookup: {
      from: "Hotels",
      localField: "_id",
      foreignField: "_id",
      as: "hotelDetails"
    }
  },
  { $project: { 
      occupancyRate: { $divide: ["$occupiedRooms", { $arrayElemAt: ["$hotelDetails.totalRoomCount", 0] }] } 
  }}
]);
 db.Bookings.aggregate([
  {
    $lookup: {
      from: "Hotels",
      localField: "hotelID",
      foreignField: "_id",
      as: "hotel"
    }
  },
  { $unwind: "$hotel" },
  { $group: { _id: "$hotel.location.city", bookingCount: { $sum: 1 } } },
  { $sort: { bookingCount: -1 } }
]);
db.PricingHistory.aggregate([
  { $match: { hotelID: "HTL_99" } },
  {
    $group: {
      _id: { 
        month: { $month: "$timestamp" }, 
        roomType: "$roomType" 
      },
      avgPrice: { $avg: "$price" },
      maxPrice: { $max: "$price" }
    }
  },
  { $sort: { "_id.month": 1 } }
]);
