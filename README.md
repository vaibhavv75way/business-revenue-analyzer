# Business Revenue Analyzer (Angular Mini Project)

This project is a mini Angular application that demonstrates how to build a business-focused financial dashboard using custom pipes, date-based filtering, and user input handling. The emphasis is on implementing real-world business rules rather than simple numeric formatting.

---

## Features

- Date range selection to filter financial data (Start Date – End Date)
- Financial summary including:
  - Total Revenue
  - Total Expense
  - Net Profit or Loss
- Custom currency formatting based on business rules
- Ability to add financial entries for a selected date range
- Automatic recalculation when data or date range changes

---

## Tech Stack

- Angular (CLI v21.1.2)
- TypeScript
- Standalone Components
- Angular Signals
- Custom Pipes
- Tailwind CSS

---

## Business Currency Formatting Rules

The application uses a custom Angular pipe to format currency according to business logic:

- Revenue is displayed with a positive sign
- Expense is displayed with a negative sign
- Profit is displayed based on net value (positive or negative)
- Values are formatted as:
  - Crores (Cr) for values >= 1,00,00,000
  - Lakhs (L) for values >= 1,00,000
  - Thousands (K) for values >= 1,000
  - Exact value for amounts below 1,000
- Zero values are displayed as `₹ 0`

---

## Project Structure

```text
src/app
├── models
│   └── financial-entry.model.ts
├── pages
│   └── dashboard
│       ├── dashboard.component.ts
│       └── dashboard.component.html
├── pipes
│   └── business-currency.pipe.ts
├── app.routes.ts
└── main.ts
