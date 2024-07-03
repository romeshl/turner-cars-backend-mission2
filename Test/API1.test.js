const request = require('supertest');

// Grouping positive test cases under a single describe block
describe('carValue', () => {
  // Test case for calculating quote value correctly for valid inputs
  it('calculates quote value correctly for valid input', () => {
    // Testing with various car models and years, expecting specific car values
    expect(carValue('Civic', 2020)).toBe(12620);
    expect(carValue('Rav4', 2020)).toBe(5420);
    expect(carValue('Prius', 2022)).toBe(7420);
    expect(carValue('CR-V', 2021)).toBe(6321);
    expect(carValue('Mustang', 2015)).toBe(9215);
    expect(carValue('Fit', 2017)).toBe(4319);
    expect(carValue('Focus', 2022)).toBe(7420);
    expect(carValue('Accord', 2018)).toBe(7018);
    expect(carValue('Camry', 1999)).toBe(6419);
    expect(carValue('Land Cruiser', 2023)).toBe(9322);
    expect(carValue('Accord', 2015)).toBe(7018);
    expect(carValue('Camry', 2018)).toBe(7419);
  });

  // Grouping negative test cases under a single describe block
  it('handles invalid input gracefully', () => {
    // Testing with invalid inputs, expecting the function to throw an error
    expect(() => carValue('InvalidModel', 2023)).toThrowError();
    expect(() => carValue('Corolla', -100)).toThrowError();
    expect(() => carValue('Fit', 2025)).toThrowError();
    expect(() => carValue('Astra', 'two thousand')).toThrowError();
    expect(() => carValue('InvalidModel', 1900)).toThrowError();
    expect(() => carValue('Commodore VF', -987)).toThrowError();
    expect(() => carValue('Hilux', 'tweenty-twenty')).toThrowError();
    expect(() => carValue('Explorer', 0)).toThrowError();
  });

  // Grouping boundary test cases under a single describe block
  it('adjusts quote based on carValue age', () => {
    // Testing with boundary year values, expecting specific behaviors (either throwing an error or returning a specific value)
    expect(() => carValue('Fusion', 2030)).toThrowError();
    expect(carValue('HR-V', 2024)).toBe(6322);
    expect(carValue('Corolla', 1998)).toBe(5018);
    expect(carValue('Highlander', 1989)).toBe(10215);
    expect(() => carValue('Odyssey', 2100)).toThrowError();
    expect(() => carValue('Mustang', 3000)).toThrowError();
    expect(carValue('Edge', 2010)).toBe(3705);
    expect(carValue('Civic', 2024)).toBe(6614);
    expect(carValue('Pilot', 2000)).toBe(4520);
  });
}
);