# 📌 To-Do-Tracker

A simple fullstack habit & task tracking application.

------------------------------------------------------------------------

## 📁 Repository Structure

This project is a **mono-repo**, containing both frontend and backend:

    To-Do-Tracker/
     ├── backend/     # Node.js + Express API
     ├── frontend/    # Vue 3 + Vite Frontend
     └── README.md

------------------------------------------------------------------------

## 🛠️ Requirements

Before running the project, install the following tools:

### **1. Git**

Download: https://git-scm.com/downloads

### **2. Node.js (LTS recommended)**

You can install Node manually or via [Chocolatey](https://chocolatey.org/install):

**Using Chocolatey (recommended):**

``` bash
choco install nodejs
```

------------------------------------------------------------------------

## 📥 Clone the Repository

1.  Create a folder on your desktop (e.g., `furkan-erkan-projekt`)
2.  Open a terminal **inside that folder**
3.  Clone the repository:

``` bash
git clone https://github.com/FurkanSelimKalkan/To-Do-Tracker.git
```

4.  Open the project in **VS Code** or **IntelliJ**\
    → Select the folder `To-Do-Tracker/`

------------------------------------------------------------------------

## 📦 Install Dependencies

You must run `npm install` in **three locations**:

### **1. Root folder**

``` bash
cd To-Do-Tracker
npm install
```

### **2. Backend folder**

``` bash
cd backend
npm install
```

### **3. Frontend folder**

``` bash
cd frontend
npm install
```

------------------------------------------------------------------------

## 🚀 Run the Project

You can run the app in **two different ways**.

------------------------------------------------------------------------

### 🔹 Option A: Run Backend & Frontend Separately

#### **Start the backend**

``` bash
cd backend
npm run dev
```

#### **Start the frontend**

``` bash
cd frontend
npm run dev
```

------------------------------------------------------------------------

### 🔹 Option B (recommended): Run Everything with One Command

In the **root folder**:

``` bash
npm run dev
```

This works because the root `package.json` contains:

``` json
"scripts": {
  "dev:backend": "cd backend && npm run dev",
  "dev:frontend": "cd frontend && npm run dev",
  "dev": "npm-run-all --parallel dev:backend dev:frontend"
}
```

This starts backend and frontend **in parallel**.

------------------------------------------------------------------------

## 🧠 Project Architecture

### **Backend (Node.js + Express)**

-   Runs on: **http://localhost:3000**
-   Contains:
    -   API endpoints (e.g. `/api/tasks`)
    -   Database logic (later via Prisma)
    -   Authentication (later)

### **Frontend (Vue 3 + Vite)**

-   Runs on: **http://localhost:5173**
-   Contains:
    -   Vue components
    -   Routing
    -   API calls to the backend

------------------------------------------------------------------------

## 🧩 Quick Test

1.  Start the backend → Terminal should show:

        Backend listenin on port http://localhost:3000

2.  Open in browser:

        http://localhost:3000

    Expected response:

    ``` json
    Hello, world!
    ```

------------------------------------------------------------------------

## ✔️ You're Ready!

This README provides: - Clean structure - Easy installation steps -
Clear separation between backend & frontend - Instructions for beginners

You can now start building the To-Do-Tracker project!
