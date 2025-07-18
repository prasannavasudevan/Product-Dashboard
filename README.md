# 🛍️ Product Dashboard

A modern, responsive **Product Dashboard** built with **React**, **Redux Toolkit**, and fully tested using **Jest** and **React Testing Library**.  
Users can browse products, view details, manage favorites, and experience smooth state management.

---

## 🚀 Live Demo

[🔗 Click here to check it out!](https://your-deployed-link.vercel.app)

---

#ScreenShots

*Home*
<img width="1920" height="969" alt="Screenshot_20250718_084634" src="https://github.com/user-attachments/assets/2a96be9f-4777-4a15-953d-987a5b99de2f" />

---

*Favorite*
<img width="1920" height="960" alt="Screenshot_20250718_084645" src="https://github.com/user-attachments/assets/2ea51c07-a8e8-4697-a1f2-f566d0f4abd3" />

*Product Details*
<img width="1920" height="964" alt="Screenshot_20250718_084707" src="https://github.com/user-attachments/assets/e12478f7-e349-438f-8417-f650dc522c56" />



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
- 🧩 `FavoriteSlice.test.jsx` – Tests favorite toggle logic and Redux state updates for add/remove.

> All test suites are passing ✅  
> More test cases will be added!

<img width="1800" height="919" alt="Screenshot_20250717_092019" src="https://github.com/user-attachments/assets/474af93c-a21b-4f91-84c9-b0d210e7f4ed" />


---

## 📁 Project Structure

```text
src/
├── components/
│   └── ProductCard.jsx
├── features/
│   └── favorites/
│       └── FavoritesPage.jsx
├── store/
│   └── index.js
├── tests/
│   ├── ProductCard.test.jsx
│   └── FavoritesPage.test.js
```



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
