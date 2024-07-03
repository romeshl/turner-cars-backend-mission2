### Positive Test Cases

| Test Case | Test Description                                         | Input                                 | Expected Output                    |
|-----------|-----------------------------------------------------------|---------------------------------------|------------------------------------|
| 1         | Input car model and year within the range.                | { model: "Mustang", year: 2020 }      | { car_value: 11520 }               |
| 2         | Input car model is in mixed case.                         | { model: "CoRoLlA", year: 2015 }      | { car_value: 9615 }                |
| 3         | Input year is at the lower bound of the range.            | { model: "Accord", year: 1950 }       | { car_value: 6350 }                |
| 4         | Input car model contains numbers and special characters.  | { model: "Model-3", year: 2014 }      | { car_value: 6914 }                |
| 5         | Input car model name only contains numbers.               | { model: "911", year: 2018 }          | { car_value: 2018 }                |
| 6         | Input year is at the upper bound of the range.            | { model: "Altima", year: 2024 }       | { car_value: 7624 }                |
| 7         | Input car model has spaces in between the letters.        | { model: "I m  p a l a", year: 2012 } | { car_value: 7212 }                |
| 8         | Input car model with one letter and a number.             | { model: "A4", year: 2009 }           | { car_value: 2109 }                |
| 9         | Input car model with letters and special character.       | { model: "CR-V", year: 2017 }         | { car_value: 6317 }                |
| 10        | Input car model with text and numbers.                    | { model: "911 Turbo", year: 1990 }    | { car_value: 9590 }                |


### Negative Test Cases

| Test Case | Test Description                                         | Input                                       | Expected Output            |
|-----------|-----------------------------------------------------------|---------------------------------------------|----------------------------|
| 1         | Input empty car model name.                               | { model: "", year: 2015 }                    | { error: "there is an error" } |
| 2         | Input year before 1950.                                   | { model: "Camry", year: 1949 }               | { error: "there is an error" } |
| 3         | Input car model contains numbers.                         | { model: 123, year: 2018 }                   | { error: "there is an error" } |
| 4         | Input car model name contains empty spaces.                | { model: "     ", year: 2008 }               | { error: "there is an error" } |
| 5         | Input year in the future.                                 | { model: "Corolla", year: 2025 }             | { error: "there is an error" } |
| 6         | Input year contains a string.                             | { model: "Civic", year: "2014" }             | { error: "there is an error" } |
| 7         | Input car model name is None.                             | { model: null, year: 2018 }                  | { error: "there is an error" } |
| 8         | Input year is an empty string.                            | { model: "Fusion", year: "" }                | { error: "there is an error" } |
| 9         | Input is an empty JSON object.                            | {}                                          | { error: "there is an error" } |
| 10        | Input year unrealistically in the future.                 | { model: "Impala", year: 3000 }              | { error: "there is an error" } |
| 11        | Input is an empty array.                                  | []                                          | { error: "there is an error" } |
| 12        | Input is a text.                                          | "This is a text"                            | { error: "there is an error" } |