# Temperature Converter - 🔄 Convert Temperatures with Precision

## 📖 Overview
This is a console-based Node.js application that converts temperatures between multiple temperature scales using accurate mathematical formulas. The application follows strict modular programming principles, separating core business logic from user interactions, and provides an interactive, menu-driven interface.

## ✨ Features
- Interactive console interface
- Professional menu system
- 12 temperature conversion options
- Accurate mathematical calculations
- Supports decimal values
- Input validation
- Error handling
- Unlimited conversions until Exit
- Modular architecture
- Beginner-friendly code
- Reusable conversion functions
- Fast execution
- Cross-platform compatibility

## 🛠 Technology Stack

| Category | Technology |
|----------|------------|
| Language | JavaScript (ES6) |
| Runtime | Node.js |
| Module | readline |
| Architecture | Modular Programming |
| IDE | Visual Studio Code |
| Version Control | Git & GitHub |

## 📂 Architecture & Workflow
<img src="https://github.com/ritish18089/CognifzyTask4/blob/main/task4cogn.png" height="1000px" width="1000px">


## 📝 Supported Temperature Scales
- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)
- Rankine (°R)

## 📐 Conversion Formulas

**Celsius → Fahrenheit**  
`F = (C × 9/5) + 32`

**Fahrenheit → Celsius**  
`C = (F − 32) × 5/9`

**Celsius → Kelvin**  
`K = C + 273.15`

**Kelvin → Celsius**  
`C = K − 273.15`

**Fahrenheit → Kelvin**  
`K = (F − 32) × 5/9 + 273.15`

**Kelvin → Fahrenheit**  
`F = (K − 273.15) × 9/5 + 32`

**Celsius → Rankine**  
`R = (C + 273.15) × 9/5`

**Rankine → Celsius**  
`C = (R − 491.67) × 5/9`

**Fahrenheit → Rankine**  
`R = F + 459.67`

**Rankine → Fahrenheit**  
`F = R − 459.67`

**Kelvin → Rankine**  
`R = K × 9/5`

**Rankine → Kelvin**  
`K = R × 5/9`

## 🔒 Input Validation

- **Invalid menu selection**: Automatically prompts the user to enter a valid option between 1 and 13.  
- **Non-numeric values**: Triggers a recursive prompt rejecting alphabet characters or symbols.  
- **Negative Kelvin**: Blocks conversions for Kelvin values below absolute zero (0 K).  
- **Negative Rankine**: Blocks conversions for Rankine values below absolute zero (0 °R).  
- **Graceful error handling**: Errors throw clean console messages without crashing the Node.js process.

## 📸 Screenshots
### 📋 Main Menu
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/0.png" height="1000px">

### 🌡️➡️🔥 Celsius → Fahrenheit
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/1.png" height="1000px">

### 🔥➡️🌡️ Fahrenheit → Celsius
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/2.png" height="1000px">

### 🌡️➡️❄️ Celsius → Kelvin
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/3.png" height="1000px">

### ❄️➡️🌡️ Kelvin → Celsius
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/4.png" height="1000px">

### 🔥➡️❄️ Fahrenheit → Kelvin
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/5.png" height="1000px">

### ❄️➡️🔥 Kelvin → Fahrenheit
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/6.png" height="1000px">

### 🌡️➡️📏 Celsius → Rankine
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/7.png" height="1000px">

### 📏➡️🌡️ Rankine → Celsius
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/8.png" height="1000px">

### 🔥➡️📏 Fahrenheit → Rankine
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/9.png" height="1000px">

### 📏➡️🔥 Rankine → Fahrenheit
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/10.png" height="1000px">

### ❄️➡️📏 Kelvin → Rankine
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/11.png" height="1000px">

### 📏➡️❄️ Rankine → Kelvin
<p align="center"><img src="https://github.com/ritish18089/CognifzyTask4/blob/main/12.png" height="1000px">

## 📚 Learning Outcomes
- Understand and implement temperature conversion formulas between Celsius, Fahrenheit, Kelvin, and Rankine.
- Develop a menu-driven console application using JavaScript and Node.js.
- Apply modular programming by separating application logic into different files (main.js and converter.js).
- Handle user input using the Node.js Readline module.
- Implement input validation and error handling for invalid menu choices and temperature values.
- Create and use reusable functions for performing temperature conversions.
- Manage application flow using conditional statements and switch-case.
- Work with floating-point calculations and display formatted output.
- Build a cross-platform console application that runs on different operating systems using Node.js.
- Improve problem-solving skills by implementing 12 different temperature conversion operations in a clean and maintainable codebase.
- Organize a project with a professional folder structure suitable for GitHub and portfolio projects.
- Gain practical experience in developing interactive command-line applications using modern JavaScript (ES6+).

## ⚙ Installation Steps
- Ensure Java Development Kit (JDK 17 or higher) is installed on your system.
- Clone or download this repository.
- Navigate to the Task4- Temperature Converter project directory.

## 📂 How to Run
### Command Line
1. Open your terminal or command prompt.
2. Navigate to the project folder:
```bash
cd "Task 4-Temperature Converter"
```
3. Install the required dependencies:
```bash
npm install
```
4. Run the application:

```bash
node main.js
```

### IDE (Visual Studio Code)

- Open the **Task 4-Temperature Converter** project folder.
- Ensure **Node.js** is installed on your system.
- Open the integrated terminal (**Terminal → New Terminal**).


## 📈 Future Enhancements
- Add Réaumur temperature scale.  
- Add Delisle temperature scale.  
- Build a graphical user interface.  
- Develop a web version using HTML, CSS, and JavaScript.  
- Create a REST API using Express.js.  
- Add conversion history with file storage.  

## Project Done By:
**Author:** Ritish Kannur  
**Internship:** Software Development  
**Project:** CRUD Operations
