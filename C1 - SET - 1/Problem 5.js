 // Insert a Course with Multiple Instructors
db.Courses.insertOne({
  _id: "COURSE_MBA_101",
  institutionID: "INST_HARVARD",
  title: "Global Business Strategy",
  instructors: ["INST_001", "INST_002"],
  modules: [
    { name: "Market Analysis", duration: "2 weeks" },
    { name: "Financial Planning", duration: "3 weeks" }
  ],
  price: 500
});

// Insert Student Enrollment with Progress
db.Enrollments.insertOne({
  enrollmentID: "ENR_9988",
  studentID: "STUD_4455",
  courseID: "COURSE_MBA_101",
  enrollmentDate: new Date("2026-01-15"),
  progressPercent: 45,
  status: "Active",
  completedModules: ["Market Analysis"]
});
 db.Enrollments.aggregate([
  { $match: { studentID: "STUD_4455" } },
  {
    $lookup: {
      from: "Courses",
      localField: "courseID",
      foreignField: "_id",
      as: "courseInfo"
    }
  },
  { $unwind: "$courseInfo" },
  {
    $project: {
      courseTitle: "$courseInfo.title",
      progress: "$progressPercent",
      status: "$status"
    }
  }
]);
 db.Assignments.updateOne(
  { _id: "ASM_01", "submissions.studentID": "STUD_4455" },
  { 
    $set: { 
      "submissions.$.grade": "A",
      "submissions.$.gradedAt": new Date() 
    } 
  }
);
db.Enrollments.updateOne(
  { studentID: "STUD_4455", courseID: "COURSE_MBA_101" },
  { 
    $set: { 
      status: "Completed", 
      progressPercent: 100,
      completionDate: new Date() 
    } 
  }
);
db.Enrollments.aggregate([
  { $group: { _id: "$courseID", enrollmentCount: { $sum: 1 } } },
  { $sort: { enrollmentCount: -1 } },
  { $limit: 10 },
  {
    $lookup: {
      from: "Courses",
      localField: "_id",
      foreignField: "_id",
      as: "details"
    }
  }
]);

db.Enrollments.aggregate([
  {
    $group: {
      _id: "$courseID",
      totalStudents: { $sum: 1 },
      completedCount: { 
        $sum: { $cond: [{ $eq: ["$status", "Completed"] }, 1, 0] } 
      }
    }
  },
  { 
    $project: { 
      successRate: { $multiply: [{ $divide: ["$completedCount", "$totalStudents"] }, 100] } 
    } 
  }
]);
 db.Enrollments.aggregate([
  {
    $lookup: {
      from: "Courses",
      localField: "courseID",
      foreignField: "_id",
      as: "course"
    }
  },
  { $unwind: "$course" },
  {
    $group: {
      _id: "$course.institutionID",
      avgProgress: { $avg: "$progressPercent" },
      activeUsers: { $sum: 1 }
    }
  },
  { $sort: { avgProgress: -1 } }
]);