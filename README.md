# CRUD API with Node.js and MongoDB Atlas

## 📌 Description
This is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB Atlas.

## 🚀 Features
- Create, Read, Update, and Delete operations
- MongoDB Atlas for cloud-based database storage
- RESTful API structure

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📂 Project Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/crud-api.git
   cd crud-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` file** and add your MongoDB Atlas connection string:
   ```sh
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=5000
   ```

4. **Start the server**
   ```sh
   npm start
   ```

## 📌 API Endpoints

| Method | Endpoint      | Description          |
|--------|-------------|----------------------|
| GET    | /api/users   | Get all items       |
| GET    | /api/singleusers/:id | Get single item  |
| POST   | /api/createuser  | Create new item     |
| PUT    | /api/updateuser/:id | Update item      |
| DELETE | /api/deleteuser/:id | Delete item      |

## 📧 Contact
For any questions or contributions, feel free to reach out!

---
Made with ❤️ by Shivani
