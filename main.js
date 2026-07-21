const readline = require('readline');
const converter = require('./converter');

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to prompt user using Promises
const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};

const displayMenu = () => {
    console.log("\n==============================");
    console.log("      TEMPERATURE CONVERTER");
    console.log("==============================");
    console.log("1. Celsius → Fahrenheit");
    console.log("2. Fahrenheit → Celsius");
    console.log("3. Celsius → Kelvin");
    console.log("4. Kelvin → Celsius");
    console.log("5. Fahrenheit → Kelvin");
    console.log("6. Kelvin → Fahrenheit");
    console.log("7. Celsius → Rankine");
    console.log("8. Rankine → Celsius");
    console.log("9. Fahrenheit → Rankine");
    console.log("10. Rankine → Fahrenheit");
    console.log("11. Kelvin → Rankine");
    console.log("12. Rankine → Kelvin");
    console.log("13. Exit");
    console.log("==============================");
};

const getValidTemperature = async () => {
    let temp;
    while (true) {
        const input = await askQuestion("Enter the temperature to convert: ");
        temp = parseFloat(input);
        if (!isNaN(temp)) {
            break;
        }
        console.log("Invalid input. Please enter a valid numeric temperature.");
    }
    return temp;
};

const runApplication = async () => {
    console.log("\nWelcome to the Professional Temperature Converter Application!");
    let running = true;

    while (running) {
        displayMenu();
        const choice = await askQuestion("Enter your choice (1-13): ");

        let inputTemp, result;
        const choiceInt = parseInt(choice);

        if (choiceInt >= 1 && choiceInt <= 12) {
            inputTemp = await getValidTemperature();

            // Validate Kelvin input to not be negative
            if ((choiceInt === 4 || choiceInt === 6 || choiceInt === 11) && inputTemp < 0) {
                console.log("\nError: Temperature in Kelvin cannot be negative (Absolute zero is 0 K).");
                continue;
            }
            // Validate Rankine input to not be negative
            if ((choiceInt === 8 || choiceInt === 10 || choiceInt === 12) && inputTemp < 0) {
                console.log("\nError: Temperature in Rankine cannot be negative (Absolute zero is 0 °R).");
                continue;
            }
            // Absolute zero checks for Celsius
            if ((choiceInt === 1 || choiceInt === 3 || choiceInt === 7) && inputTemp < -273.15) {
                console.log("\nError: Temperature cannot be below absolute zero (-273.15 °C).");
                continue;
            }
            // Absolute zero checks for Fahrenheit
            if ((choiceInt === 2 || choiceInt === 5 || choiceInt === 9) && inputTemp < -459.67) {
                console.log("\nError: Temperature cannot be below absolute zero (-459.67 °F).");
                continue;
            }
        }

        switch (choiceInt) {
            case 1:
                result = converter.celsiusToFahrenheit(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °C = ${result.toFixed(2)} °F`);
                break;
            case 2:
                result = converter.fahrenheitToCelsius(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °F = ${result.toFixed(2)} °C`);
                break;
            case 3:
                result = converter.celsiusToKelvin(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °C = ${result.toFixed(2)} K`);
                break;
            case 4:
                result = converter.kelvinToCelsius(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} K = ${result.toFixed(2)} °C`);
                break;
            case 5:
                result = converter.fahrenheitToKelvin(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °F = ${result.toFixed(2)} K`);
                break;
            case 6:
                result = converter.kelvinToFahrenheit(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} K = ${result.toFixed(2)} °F`);
                break;
            case 7:
                result = converter.celsiusToRankine(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °C = ${result.toFixed(2)} °R`);
                break;
            case 8:
                result = converter.rankineToCelsius(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °R = ${result.toFixed(2)} °C`);
                break;
            case 9:
                result = converter.fahrenheitToRankine(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °F = ${result.toFixed(2)} °R`);
                break;
            case 10:
                result = converter.rankineToFahrenheit(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °R = ${result.toFixed(2)} °F`);
                break;
            case 11:
                result = converter.kelvinToRankine(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} K = ${result.toFixed(2)} °R`);
                break;
            case 12:
                result = converter.rankineToKelvin(inputTemp);
                console.log(`\n--- Result ---\n${inputTemp.toFixed(2)} °R = ${result.toFixed(2)} K`);
                break;
            case 13:
                console.log("\nThank you for using the Temperature Converter. Goodbye!\n");
                running = false;
                rl.close();
                break;
            default:
                console.log("\nInvalid choice. Please select a number between 1 and 13.");
        }
    }
};

runApplication();
