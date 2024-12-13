# WAM Calculator

A web-based Weighted Average Mark (WAM) calculator for University of Sydney students. This tool helps students calculate their WAM by considering unit marks and credit points.

## Features

- Calculate WAM based on unit marks and credit points
- Add/remove units dynamically
- Persistent storage (results remain after page refresh)
- Real-time validation of inputs
- Clear and intuitive user interface

## How WAM is Calculated

The Weighted Average Mark (WAM) is calculated using the following formula:

WAM = Σ(marks × credit point value) / Σ(credit point value)

All units have an equal weighting of one. The calculator:
1. Multiplies each unit's mark by its credit point value
2. Adds these totals together
3. Divides by the sum of all credit points attempted

## Usage

1. Enter the unit name (optional)
2. Input your mark (0-100)
3. Enter the credit points for the unit
4. Add more units as needed using the "Add Unit" button
5. Click "Calculate WAM" to see your result
6. Use "Clear All" to reset the calculator

## Technologies Used

- React.js
- TailwindCSS
- LocalStorage for data persistence
- Lucide React for icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Aryan01101/wam-calculator.git
```

2. Navigate to the project directory:
```bash
cd wam-calculator
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- University of Sydney for the WAM calculation formula and guidelines
- React and TailwindCSS communities for excellent documentation