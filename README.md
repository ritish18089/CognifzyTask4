# 🌡️ Task 4 – Temperature Converter

A professional, menu-driven Node.js console application that accurately converts temperatures between Celsius, Fahrenheit, Kelvin, and Rankine scales.

---

# 📖 Overview

This is a console-based Node.js application that converts temperatures between multiple temperature scales using accurate mathematical formulas. The application follows strict modular programming principles, separating core business logic from user interactions, and provides an interactive, menu-driven interface.

---

# 🎯 Objectives

• Build a modular Node.js console application.
• Demonstrate mathematical conversions.
• Practice modular programming.
• Implement user input validation.
• Provide a clean menu-driven interface.
• Support multiple temperature scales.
• Improve JavaScript programming skills.

---

# ✨ Features

• Interactive console interface
• Professional menu system
• 12 temperature conversion options
• Accurate mathematical calculations
• Supports decimal values
• Input validation
• Error handling
• Unlimited conversions until Exit
• Modular architecture
• Beginner-friendly code
• Reusable conversion functions
• Fast execution
• Cross-platform compatibility

---

# 🌡️ Supported Temperature Scales

• Celsius (°C)
• Fahrenheit (°F)
• Kelvin (K)
• Rankine (°R)

---

# 🔄 Supported Temperature Conversions

| No | Conversion |
|----|------------|
| 1  | Celsius → Fahrenheit |
| 2  | Fahrenheit → Celsius |
| 3  | Celsius → Kelvin |
| 4  | Kelvin → Celsius |
| 5  | Fahrenheit → Kelvin |
| 6  | Kelvin → Fahrenheit |
| 7  | Celsius → Rankine |
| 8  | Rankine → Celsius |
| 9  | Fahrenheit → Rankine |
| 10 | Rankine → Fahrenheit |
| 11 | Kelvin → Rankine |
| 12 | Rankine → Kelvin |

---

# 📐 Conversion Formulas

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

---

# 🛠 Technology Stack

| Category | Technology |
|----------|------------|
| Language | JavaScript (ES6) |
| Runtime | Node.js |
| Module | readline |
| Architecture | Modular Programming |
| IDE | Visual Studio Code |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
Task 4-Temperature Converter/
│── package.json       # Project metadata and dependencies
│── main.js            # Entry point; handles user interaction and the menu
│── converter.js       # Core business logic containing all conversion formulas
│── README.md          # Project documentation
│── screenshots/       # Folder containing application screenshots
│── output/            # Folder for execution artifacts (if any)
│── .gitignore         # Defines ignored files for Git version control
```

---

# 🏗 Architecture

The modular architecture operates in the following flow:

**User**
↓
**main.js**  
*Manages the menu, reads input from the user, and handles validation.*
↓
**converter.js**  
*Pure functions that execute mathematically precise conversions.*
↓
**Conversion Functions**  
*Calculates the result using the specific formula requested.*
↓
**Console Output**  
*Displays the fully formatted result back to the user.*

---

# 🔄 Application Workflow

**Start**  
↓  
**Display Menu**  
↓  
**User selects conversion**  
↓  
**Enter temperature**  
↓  
**Validate input**  
↓  
**Perform conversion**  
↓  
**Display result**  
↓  
**Repeat or Exit**  

---

# 🚀 Installation

```bash
git clone <repository>
cd "Task 4-Temperature Converter"
npm install
node main.js
```

---

# ▶ Running the Application

To start the interactive prompt, execute the following command in your terminal:

```bash
node main.js
```

---

# 📸 Screenshots

| View | Screenshot |
|------|------------|
| Home Screen | `[Screenshot Placeholder]` |
| Main Menu | `[Screenshot Placeholder]` |
| Celsius to Fahrenheit | `[Screenshot Placeholder]` |
| Fahrenheit to Celsius | `[Screenshot Placeholder]` |
| Kelvin Conversion | `[Screenshot Placeholder]` |
| Rankine Conversion | `[Screenshot Placeholder]` |
| Invalid Input | `[Screenshot Placeholder]` |
| Exit Screen | `[Screenshot Placeholder]` |

---

# 🧪 Testing Strategy

| Input | Expected Output |
|-------|-----------------|
| 0°C → 32°F | `0.00 °C = 32.00 °F` |
| 100°C → 212°F | `100.00 °C = 212.00 °F` |
| 32°F → 0°C | `32.00 °F = 0.00 °C` |
| 273.15K → 0°C | `273.15 K = 0.00 °C` |
| 300K → 540°R | `300.00 K = 540.00 °R` |
| 491.67°R → 32°F | `491.67 °R = 32.00 °F` |
| -40°C → -40°F | `-40.00 °C = -40.00 °F` |

---

# ✅ Output Example

```text
==============================
      TEMPERATURE CONVERTER
==============================
1. Celsius → Fahrenheit
2. Fahrenheit → Celsius
...
13. Exit
==============================
Enter your choice (1-13): 1
Enter the temperature to convert: 0

--- Result ---
0.00 °C = 32.00 °F
```

---

# 🔒 Input Validation

**Invalid menu selection**: Automatically prompts the user to enter a valid option between 1 and 13.  
**Non-numeric values**: Triggers a recursive prompt rejecting alphabet characters or symbols.  
**Negative Kelvin**: Blocks conversions for Kelvin values below absolute zero (0 K).  
**Negative Rankine**: Blocks conversions for Rankine values below absolute zero (0 °R).  
**Graceful error handling**: Errors throw clean console messages without crashing the Node.js process.

---

# 📈 Future Enhancements

• Add Réaumur temperature scale.  
• Add Delisle temperature scale.  
• Build a graphical user interface.  
• Develop a web version using HTML, CSS, and JavaScript.  
• Create a REST API using Express.js.  
• Add conversion history with file storage.  

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page. If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

---

# 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

# 👨‍💻 Author

**Name**: `[Your Name]`  
**GitHub**: `[Your GitHub Link]`  
**LinkedIn**: `[Your LinkedIn Link]`  
**Portfolio**: `[Your Portfolio Link]`
