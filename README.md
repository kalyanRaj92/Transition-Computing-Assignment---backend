## Create a Simple Checklist System Using Node.js
**Task Description**:
You need to create a Checklist System in Node.js that evaluates certain conditions
based on the provided input data (fetched from an API) and displays a dashboard with
results showing which conditions have passed and failed.
API Endpoint for Input Data:

## API Endpoint
http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2

c63639

## Checklist Rules:
1. **Valuation Fee Paid**: isValuationFeePaid should be true.
2. **UK Resident**: isUkResident should be true.
3. **Risk Rating Medium**: riskRating should be "Medium".
4. **LTV Below 60%**: Calculate Loan-to-Value as (Loan Required / Purchase Price) *
100 and ensure it is less than 60%.

**Additional Requirements**:
• Write Clean Code: Code should follow best practices and be readable and
modular.
• Future Proofing: Design the solution so that adding or modifying checklist rules
is straightforward without significant changes to the existing codebase.

**Expected Output**:
A Dashboard displaying The status (Passed/Failed) of each rule.

**Hints for Implementation**:
• Fetch the data from the provided API using Node.js (e.g., with axios or fetch).
• Store checklist rules in a configuration file or array to make them easy to modify.

• Use a function to evaluate each rule and return the result dynamically.
• Implement the dashboard using a minimal frontend framework or plain
HTML/CSS/JS.

**Deliverables**:
• Node.js codebase with modular, clean functions.
• A simple dashboard showing the results of the checklist evaluation.
• Documentation or comments explaining how to add new conditions in the
future.

This structure ensures clarity, scalability, and ease of implementation for your intern!