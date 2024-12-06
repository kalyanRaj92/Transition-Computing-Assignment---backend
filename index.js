import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Evaluate checklist for each application
const evaluateChecklist = (data) => {
  return data.map((each) => {

    const valuationFeePaid = each.isValuationFeePaid === true;
    const ukResident = each.isUkResident === true;
    const riskRatingMedium = each.riskRating === "Medium";
    const ltvBelow60 = (each.loanRequired / each.purchasePrice) * 100;

    const status =
      valuationFeePaid &&
      ukResident &&
      riskRatingMedium &&
      ltvBelow60 < 60
        ? "Passed"
        : "Failed";

    return {
      applicationId: each.id,
      valuationFeePaid,
      ukResident,
      riskRatingMedium,
      ltvBelow60,
      status,
    };
  });
};


const URL = "http://qa-gb.api.dynamatix.com:3100/api/applications";
// API endpoint to fetch data
app.get("/checklist", async (req, res) => {
  try {
    const response = await axios.get(URL);
    const applications = response.data;

    const results = evaluateChecklist(applications);
    res.json(results);
  } catch (err) {
    res
      .status(500)
      .send({ error: "Error fetching data", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
