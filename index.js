import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

const evaluateChecklist = (data) => {
    return{
        valuationFeePaid: data.isValuationFeePaid === true,
        ukResident: data.isUkResident === true,
        riskRatingMedium: data.riskRating === "Medium",
        ltvBelow60: (data.loanRequired / data.purchasePrice) * 100 < 60,
    };

};

const URL = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639"

app.get('/checklist',async(req, res)=>{
    try {
        const response = await axios.get(URL);
        const data = response.data;

        const results = evaluateChecklist(data);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).send({ error: 'Error fetching data', message: err.message });
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})