use bankDB

db.loans.insertMany([
  {
    loan_id: 1801,
    applicant_name: "Ravi",
    loan_type: "Home",
    loan_amount: 5000000,
    interest_rate: 7.5,
    tenure_months: 240,
    application_date: new Date("2026-04-01"),
    approval_status: "Pending",
    credit_score: 720
  },
  {
    loan_id: 1802,
    applicant_name: "Sneha",
    loan_type: "Car",
    loan_amount: 800000,
    interest_rate: 9.0,
    tenure_months: 60,
    application_date: new Date("2026-03-15"),
    approval_status: "Approved",
    credit_score: 780
  },
  {
    loan_id: 1803,
    applicant_name: "Arjun",
    loan_type: "Personal",
    loan_amount: 300000,
    interest_rate: 12.5,
    tenure_months: 36,
    application_date: new Date("2022-12-01"),
    approval_status: "Rejected",
    credit_score: 650
  },
  {
    loan_id: 1804,
    applicant_name: "Pooja",
    loan_type: "Home",
    loan_amount: 4500000,
    interest_rate: 7.2,
    tenure_months: 180,
    application_date: new Date("2026-02-10"),
    approval_status: "Pending",
    credit_score: 760
  },
  {
    loan_id: 1805,
    applicant_name: "Vikram",
    loan_type: "Car",
    loan_amount: 600000,
    interest_rate: 8.5,
    tenure_months: 48,
    application_date: new Date("2026-01-20"),
    approval_status: "Pending",
    credit_score: 710
  }
])

db.loans.find({
  approval_status: "Pending",
  credit_score: { $gt: 700 }
})

db.loans.updateMany(
  { credit_score: { $gt: 750 } },
  { $set: { approval_status: "Approved" } }
)

db.loans.deleteMany({
  application_date: { $lt: new Date("2023-01-01") },
  approval_status: "Rejected"
})

db.loans.aggregate([
  {
    $match: { approval_status: "Approved" }
  },
  {
    $group: {
      _id: "$loan_type",
      avg_loan_amount: { $avg: "$loan_amount" }
    }
  }
])