# Finance Manager

This is a simple personal finance management app built using **ReactJS**. It helps you track your income and expenses, get a quick summary of your current financial status, and visualize data using charts.

This project started as a way for me to explore how React can be used to build real-world applications. It’s one of my first full-fledged apps, and through it, I got to practice component-based design, hooks, state management, and working with the browser's local storage for data persistence.

## Features

- Add income and expense entries
- View your balance summary
- Visualize financial data with charts (Chart.js)
- Stores data in the browser using **localStorage**
- Clean and responsive UI using Bootstrap

## How to run locally

1. Clone the repository:

       git clone https://github.com/Dhee-raj10/finance-manager.git
   
2.Navigate into the project directory:

      cd finance-manager
    
3.Install Dependencies and start development server:
   
     npm install
     npm start


# Folder Structure
<pre> ``` PersonalFinanceManager/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ │ ├── BalanceCard.js │ │ ├── Charts.js │ │ ├── Header.js │ │ ├── TransactionForm.js │ │ └── TransactionList.js │ ├── context/ │ │ └── ThemeContext.js │ ├── App.js │ ├── App.css │ ├── index.js │ └── index.css ├── package.json └── README.md ``` </pre>


# Tech Stack
   ReactJS

   Bootstrap / React-Bootstrap

   Chart.js + react-chartjs-2

   JavaScript 

   Browser localStorage

# Topics Covered

  While working on this project, I got to apply and understand:

   1.Building apps with React functional components

   2.Managing state with useState

   3.Creating dynamic and reusable components

   4.Persisting data using the browser’s localStorage

   5.Passing and handling props across components

   6.Event handling in React 

   7.Integrating Chart.js with React to create visual insights

   8.Designing layouts using Bootstrap for responsiveness

# Future Improvements

      1.Add category filters (e.g., Food, Rent, Transport)

      2.Monthly or yearly breakdown reports

      3.Authentication and user accounts (for multi-user support)

# Thanks for checking it out. Feel free to contribute, give feedback, or fork it for your own use!
