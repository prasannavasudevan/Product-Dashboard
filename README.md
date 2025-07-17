# 🛍️ Product Dashboard

A modern, responsive **Product Dashboard** built with **React**, **Redux Toolkit**, and fully tested using **Jest** and **React Testing Library**.  
Users can browse products, view details, manage favorites, and experience smooth state management.

---

## 🚀 Live Demo

[🔗 Click here to check it out!](https://your-deployed-link.vercel.app)

---

## 🛠️ Features

- 🧾 **Product Listing** from Fake Store API
- 🔍 **Sort by Price** (High ↔ Low)
- ❤️ **Add to Favorites** functionality
- 🛒 **Product Detail Page**
- 🌐 **Routing** with React Router DOM
- ⚙️ **Redux Toolkit** for global state management
- 🧪 **Unit & Integration Testing** with Jest

---

## 🧰 Tech Stack

| Frontend | State Management | Testing | Deployment |
|----------|------------------|---------|------------|
| React 19 | Redux Toolkit     | Jest, RTL | Vercel      |
| Tailwind CSS | React Router DOM | | |

---

## 🧪 Testing Coverage

- 🧩 `ProductCard.test.jsx` – tests display and interaction
- 🌟 `FavoritesPage.test.js` – ensures favorites are rendered correctly

> All test suites are passing ✅  
> More test cases will be added!

---

## 📁 Project Structure

<pre lang="md"> ``` src/ ├── components/ │ └── ProductCard.jsx ├── features/ │ ├── favorites/ │ │ └── FavoritesPage.jsx ├── store/ │ └── index.js ├── tests/ │ ├── ProductCard.test.jsx │ └── FavoritesPage.test.js ``` </pre>

yaml
Copy
Edit

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/prasannavasudevan/Product-Dashboard.git

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test
