# Business Revenue Analyzer

A modern Angular application that provides an interactive financial dashboard for analyzing business revenue, expenses, and profit/loss with intelligent date-range filtering and dynamic calculations.

---

## 🎬 Watch Demo

🎥 **[View Live Demo Video](https://drive.google.com/file/d/1b2uARjPHTQ180K273b3IaT7_4q0HuZEV/view?usp=sharing)**



---

## 📋 Overview

This project is a mini Angular application that demonstrates how to build a business-focused financial dashboard using modern Angular features. The application showcases real-world business logic implementation, including custom currency formatting, reactive data management with signals, and dynamic financial calculations.

---

## ✨ Features

- **Date Range Filtering**: Select custom date ranges (Start Date – End Date) to filter financial entries
- **Real-time Financial Summary**:
  - Total Revenue calculation
  - Total Expense tracking
  - Net Profit or Loss computation
- **Dynamic Entry Management**: Add new financial entries with date ranges, revenue, and expense data
- **Smart Currency Formatting**: Custom pipe that formats numbers based on business rules (Crores, Lakhs, Thousands)
- **Automatic Recalculation**: Instant updates when data or date range changes using Angular Signals
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Material Design Components**: Clean and professional UI with Angular Material

---

## 🛠️ Tech Stack

- **Framework**: Angular 21.1.0
- **Language**: TypeScript 5.9.2
- **Build Tool**: Angular CLI 21.1.2
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Angular Material 21.1.3
- **Testing**: Vitest 4.0.8
- **State Management**: Angular Signals (Reactive Primitives)
- **Architecture**: Standalone Components

---

## 🏗️ Project Structure

```text
business-revenue-analyzer/
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   └── header/
│   │   │       ├── header.ts          # Header component
│   │   │       ├── header.html        # Header template
│   │   │       ├── header.css         # Header styles
│   │   │       └── header.spec.ts     # Header tests
│   │   ├── models/
│   │   │   └── financial.model.ts     # Financial entry interface
│   │   ├── pages/
│   │   │   └── dashboard/
│   │   │       ├── dashboard.ts       # Main dashboard component
│   │   │       ├── dashboard.html     # Dashboard template
│   │   │       ├── dashboard.css      # Dashboard styles
│   │   │       └── dashboard.spec.ts  # Dashboard tests
│   │   ├── pipes/
│   │   │   ├── formatted-currency-pipe.ts      # Custom currency pipe
│   │   │   └── formatted-currency-pipe.spec.ts # Pipe tests
│   │   ├── app.ts                     # Root component
│   │   ├── app.config.ts              # App configuration
│   │   └── app.routes.ts              # Routing configuration
│   ├── index.html                     # Main HTML file
│   ├── main.ts                        # Application entry point
│   ├── material-theme.scss            # Material Design theme
│   └── styles.css                     # Global styles
├── public/                            # Static assets
├── angular.json                       # Angular workspace configuration
├── package.json                       # Dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

---

## 💰 Business Currency Formatting Rules

The application uses a custom Angular pipe (`FormattedCurrencyPipe`) to format currency according to Indian business standards:

- **Crores (Cr)**: Values >= ₹1,00,00,000 (10 million)
- **Lakhs (L)**: Values >= ₹1,00,000 (100 thousand)
- **Thousands (K)**: Values >= ₹1,000
- **Exact Value**: Amounts below ₹1,000
- **Zero Handling**: Zero values displayed as `₹ 0`

**Display Logic**:
- Revenue: Displayed with ₹ symbol prefix
- Expense: Displayed with formatted value
- Profit/Loss: Positive values show profit, negative values show loss with appropriate formatting

---

## 🎯 Key Components

### Dashboard Component
The main application view that:
- Displays financial data in a clean, organized layout
- Manages financial entries using Angular Signals for reactive state
- Implements computed properties for automatic calculations
- Handles date range filtering with overlapping date logic
- Provides an intuitive form for adding new financial entries
- Features pre-populated sample data for demonstration

### Header Component
- Application header with Material Design toolbar
- Consistent branding and navigation
- Responsive design for all screen sizes

### Financial Model
TypeScript interface defining the structure of financial entries:
```typescript
interface FinancialModel {
  id: string;
  startDate: string;
  endDate: string;
  revenue: number;
  expense: number;
}
```

### Formatted Currency Pipe
A custom Angular pipe that:
- Transforms numeric values based on their magnitude
- Applies business-specific formatting rules
- Supports profit/loss display logic
- Handles edge cases (zero, negative values)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v11.6.2 or higher)
- Angular CLI (optional, included in dev dependencies)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business-revenue-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`
   
   The application will automatically reload if you change any of the source files.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on http://localhost:4200 |
| `npm run build` | Build the project for production |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Vitest |

---

## 🧪 Testing

The project uses **Vitest** for unit testing. Test files are located alongside their respective components with `.spec.ts` extension.

**Run tests:**
```bash
npm test
```

**Test Coverage:**
- Component logic tests
- Pipe transformation tests
- Date filtering logic tests
- Calculation accuracy tests

---

## 📱 Features in Detail

### Date Range Filtering
- Select custom start and end dates using Material Design date pickers
- Automatically filters financial entries that overlap with the selected range
- Intelligent overlap detection: an entry is included if its date range intersects with the filter range
- Updates all calculations in real-time using Angular's reactivity

### Dynamic Calculations
All calculations use Angular's **computed signals** for optimal performance:
- **Total Revenue**: Sum of all revenues in filtered entries
- **Total Expense**: Sum of all expenses in filtered entries
- **Net Profit/Loss**: Difference between total revenue and total expense
- Calculations update automatically when data or filters change

### Add Financial Entry
- Clean input form with validation
- Fields: Start Date, End Date, Revenue, Expense
- Validates required fields before submission
- Entries are added dynamically without page reload
- Automatic form reset after successful submission
- Each entry gets a unique ID based on timestamp

### Sample Data
The application comes with pre-populated sample data showing:
- Three financial entries for January 2026
- Various revenue and expense amounts
- Overlapping date ranges to demonstrate filtering

---

## 🎨 UI/UX Highlights

- **Material Design**: Clean and professional interface using Angular Material components
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Intuitive Date Pickers**: Easy-to-use date selection with Material Design date pickers
- **Color-Coded Metrics**: Visual distinction between revenue, expense, and profit/loss
- **Tailwind CSS Utilities**: Utility-first styling for rapid development
- **Smooth Interactions**: Responsive UI updates without page reloads

---

## 🔧 Configuration

### Angular Configuration
The project uses modern Angular features:
- **Standalone Components**: No NgModules required
- **TypeScript Strict Mode**: Enhanced type safety
- **Vitest Testing**: Fast, modern test runner instead of Karma/Jasmine
- **Angular Signals**: For reactive state management
- **Angular Material**: UI component library

### Tailwind CSS
Configured with PostCSS v4.1.12 for utility-first styling approach:
- Custom configuration in `tailwind.config.js` (if present)
- PostCSS processing for optimal CSS output
- Responsive design utilities

---

## 💡 Learning Highlights

This project demonstrates:
- **Angular Signals**: Modern reactive state management
- **Computed Properties**: Automatic dependency tracking and updates
- **Custom Pipes**: Business logic encapsulation in reusable pipes
- **Standalone Components**: Modern Angular architecture without NgModules
- **Date Logic**: Complex date range filtering and overlap detection
- **Form Handling**: Two-way data binding with FormsModule
- **TypeScript Interfaces**: Strong typing for data models

---

## 🚧 Future Enhancements

Potential features for future development:
- Data persistence (LocalStorage or backend API)
- Export financial reports to PDF/Excel
- Charts and graphs for visual analysis
- Multiple currency support
- User authentication and multi-user support
- Advanced filtering (by category, tags, etc.)
- Budget planning and forecasting
- Notification system for financial alerts

---

## 📝 License

This project is open source and available for educational purposes.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

**How to contribute:**
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 👨‍💻 Author

Built with ❤️ using Angular

---

## 🙏 Acknowledgments

- Angular Team for the amazing framework and comprehensive documentation
- Material Design for beautiful and accessible UI components
- Tailwind CSS for utility-first styling approach
- The open-source community for inspiration and support

---

## 📞 Support

If you have any questions or need help with the project, please open an issue in the repository.

---

**Happy Coding! 🚀**
