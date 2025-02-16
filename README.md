# 🌟 UniMarket

## 🚀 Project Description
**UniMarket** is a multi-domain sales platform designed to help businesses efficiently sell their unsold stock. Built on a **monolithic architecture**, it provides a seamless user experience by offering essential features for different user roles. This project was developed during my **4-month skill enhancement internship** at **Terraform Tunisia**, where I contributed to its development.

---

## 🎯 Main Features

### 🧑‍💻 Visitor
- 🔍 Browse companies and available products.
- 🔎 Search for specific products.

### 👤 Client
- 📢 Explore companies and products.
- 🛒 Search for and manage orders.
- ✏️ Update their profile.
- 📩 Contact the administrator for support.

### 🏪 Supplier
- 🏢 Manage their account.
- 📦 Manage their product listings.
- 📧 Contact the administrator.

### 🛠️ Administrator
- 🧑‍🔧 Manage user accounts.
- 📦 Oversee and manage orders.
- 📥 Receive and handle messages.

---

## 🔧 Technologies Used

### Frontend
- 🖥️ Angular

### Backend
- ⚙️ Laravel

### Database
- 🗄️ MySQL

### Architecture
- 🏛️ Monolithic

---

## 🎯 Objective
**UniMarket** aims to streamline the sales process for businesses while offering a reliable and user-friendly platform for visitors, clients, suppliers, and administrators.

---

## 📂 How to Use This Project

### 1️⃣ Clone the Project
Clone the Git repository to your local machine:
```bash
git clone https://github.com/CharfeddineFred/UniMarket.git
```

### 2️⃣ Install Dependencies
- **Frontend**:
  Navigate to the `frontend` folder and install dependencies:
  ```bash
  cd frontend
  npm install
  ```

- **Backend**:
  Navigate to the `backend` folder and install Laravel dependencies:
  ```bash
  cd backend
  composer install
  ```

### 3️⃣ Configure Environments

- **Backend**:
  - Copy the `.env.example` file and rename it to `.env`:
    ```bash
    cp .env.example .env
    ```
  - Configure database connection settings:
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=unimarket
    DB_USERNAME=root
    DB_PASSWORD=yourpassword
    ```
  - Generate a Laravel application key:
    ```bash
    php artisan key:generate
    ```

- **Frontend**:
  - Configure the `environment.ts` file with the backend API settings:
    ```javascript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:8000/api'
    };
    ```

### 4️⃣ Prepare the Database
- Run migrations to create the necessary tables:
  ```bash
  php artisan migrate
  ```
- (Optional) Add dummy data using seeders:
  ```bash
  php artisan db:seed
  ```

### 5️⃣ Start the Project
- **Backend**:
  Start the Laravel server:
  ```bash
  php artisan serve
  ```
- **Frontend**:
  Start the Angular development server:
  ```bash
  ng serve
  ```

### 6️⃣ Access the Application
- **Frontend**: Open your browser and go to:
  ```
  http://localhost:4200
  ```
- **Backend**: The backend API is available at:
  ```
  http://localhost:8000
  ```

---

## 🚀 Features to Test
- 🌟 Browse and search for products.
- 🛒 Manage orders as a client.
- 🏢 Manage product listings as a supplier.
- ⚠️ Handle user accounts and messages as an administrator.

---

## 🖼️ Screenshots

### 🏠 Home Page

![image](https://github.com/user-attachments/assets/43c92987-a8f2-4409-a7b0-d2efca9e5d9e)


### 🔑 Authentication Interface

![image](https://github.com/user-attachments/assets/a36b0ff9-8004-46e3-904e-30812f047e54)


### 🛠️ Admin Dashboard

![image](https://github.com/user-attachments/assets/3c07da31-3cf4-4c40-9568-79a4ee6fe710)


### 📩 Contact Administrator Interface

![image](https://github.com/user-attachments/assets/8cf857e5-1944-4073-8ba3-62d7ac2d4c5b)


---


