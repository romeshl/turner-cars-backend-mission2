### Positive Test Cases

| Test Case | Test Description | Input | Expected Output |
|-----------|------------------|-------|-----------------|
| 1 | Input is a valid car_value and risk_rating. | { car_value: 6614, risk_rating: 5} | { monthly_premium: 27.56, yearly_premium: 330.70} |
| 2 | Input is the valid minimum car_value. | { car_value: 1, risk_rating: 5} | { monthly_premium: 0.00, yearly_premium: 0.05} |
| 3 | Input is the valid minimum risk_rating. | { car_value: 1000, risk_rating: 1} | { monthly_premium: 0.83, yearly_premium: 10.00} |
| 4 | Input is the maximum valid risk_rating. | { car_value: 1000, risk_rating: 5} | { monthly_premium: 4.17, yearly_premium: 50.00} |
| 5 | Input is a large car_value. | { car_value: 100000, risk_rating: 5} | { monthly_premium: 416.67, yearly_premium: 5000.00} |
| 6 | Input is car_value with decimal numbers. | { car_value: 1000.50, risk_rating: 3} | { monthly_premium: 2.50, yearly_premium: 30.02} |
| 7 | Calculates correct monthly_premium. | { car_value: 1234, risk_rating: 4} | { monthly_premium: 4.11, yearly_premium: 49.36} |
| 8 | Calculates correct yearly_premium. | { car_value: 4321, risk_rating: 2} | { monthly_premium: 7.20, yearly_premium: 86.42} |

### Negative Test Cases

| Test Case | Test Description | Input | Expected Output |
|-----------|------------------|-------|-----------------|
| 1 | Input is a negative car_value. | { car_value: -100, risk_rating: 3} | { error: "there is an error"} |
| 2 | car_value is zero. | { car_value: 0, risk_rating: 3} | { error: "there is an error"} |
| 3 | Input is a negative risk_rating. | { car_value: 1000, risk_rating: -1} | { error: "there is an error"} |
| 4 | risk_rating below range. | { car_value: 1000, risk_rating: 0} | { error: "there is an error"} |
| 5 | risk_rating above range. | { car_value: 1000, risk_rating: 6} | { error: "there is an error"} |
| 6 | Input is a non-numeric car_value. | { car_value: "1000", risk_rating: 3} | { error: "there is an error"} |
| 7 | Input is a non-numeric risk_rating. | { car_value: 1000, risk_rating: "3"} | { error: "there is an error"} |
| 8 | Both inputs are null. | { car_value: null, risk_rating: null} | { error: "there is an error"} |
| 9 | Both inputs are undefined. | { car_value: undefined, risk_rating: undefined} | { error: "there is an error"} |
| 10 | Both inputs are objects. | { car_value: {}, risk_rating: {}} | { error: "there is an error"} |
| 11 | Input is an empty JSON object. | {} | { error: "there is an error"} |
| 12 | Input is an empty array. | [] | { error: "there is an error"} |
| 13 | Input is text. | "This is text" | { error: "there is an error"} |