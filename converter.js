/**
 * Core business logic for temperature conversion.
 */

// Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

// Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

// Celsius to Kelvin
const celsiusToKelvin = (celsius) => celsius + 273.15;

// Kelvin to Celsius
const kelvinToCelsius = (kelvin) => kelvin - 273.15;

// Fahrenheit to Kelvin
const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5 / 9 + 273.15;

// Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9 / 5 + 32;

// Celsius to Rankine
const celsiusToRankine = (celsius) => (celsius + 273.15) * 9 / 5;

// Rankine to Celsius
const rankineToCelsius = (rankine) => (rankine - 491.67) * 5 / 9;

// Fahrenheit to Rankine
const fahrenheitToRankine = (fahrenheit) => fahrenheit + 459.67;

// Rankine to Fahrenheit
const rankineToFahrenheit = (rankine) => rankine - 459.67;

// Kelvin to Rankine
const kelvinToRankine = (kelvin) => kelvin * 9 / 5;

// Rankine to Kelvin
const rankineToKelvin = (rankine) => rankine * 5 / 9;

module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    celsiusToKelvin,
    kelvinToCelsius,
    fahrenheitToKelvin,
    kelvinToFahrenheit,
    celsiusToRankine,
    rankineToCelsius,
    fahrenheitToRankine,
    rankineToFahrenheit,
    kelvinToRankine,
    rankineToKelvin
};
