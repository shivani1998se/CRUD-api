

const express = require("express");
const mongoose = require("mongoose");
 
const app = express();

// Middleware to parse JSON requests
app.use(express.json());


const uri = "mongodb+srv://sr3107743:0l26dKifErX24wPo@cluster0.k1znr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
connectToDatabase();

// User Schema
 
// Define User Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    description: { type: String },
    age: { type: Number },
    state: { type: String },
    city: { type: String },
    pincode: { type: String },
    address: { type: String },
    phone: { type: String },
    password: { type: String },
    gender:{type: String},
    
    followers: { type: String }
});

const User = mongoose.model("products", UserSchema);

// Create a new user
app.post("/api/createusers", async (req, res) => {
    try {
        console.log("req.body",req.body);
        
        const existingUser = await User.findOne({ email: req.body.email });
        
        if (existingUser) {
            console.log("esistingUser",existingUser);
            
            return res.status(400).json({ message: "Email address is already in prsent" });
        }
        const newUser = new User(req.body);
   
        console.log("newUSer",newUser);
         
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

// Get all users
app.get("/api/getallusers", async (req, res) => {
    try {
        const users = await User.find({});
        console.log("users",users);
        
        res.status(200).json({ message: "We get all data of users",user:users});
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
});

// Get a single user by ID
app.get("/api/singleusers/:id", async (req, res) => {
    try {
         
        console.log("req.params.id",req.params);
        
        const user = await User.findById(req.params.id);
        console.log("user1--",user);
        
        if (!user) {
            console.log("usereror--",user);
            return res.status(404).json({ message: "User not found" });
        }
       return   res.status(200).json({ message: "We get single  data of users by id",useID:user});
       // res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
});

// Update user by ID
app.put("/api/updateusers/:id", async (req, res) => {
    try {
        console.log("req.params.id",req.params.id);
        console.log("req",req.body);
        const existingUser = await User.findOne({ email: req.body.email });
        
        if (existingUser) {
            console.log("esistingUser",existingUser);
            
            return res.status(400).json({ message: "Email address is already in prsent" });
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
});

// Delete user by ID
app.delete("/api/deleteusers/:id", async (req, res) => {
    try {
        console.log("req-paams--",req.params.id);
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (!deletedUser){
            console.log("deletUser not present", deletedUser, "----" ,req.params.id);
            
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
