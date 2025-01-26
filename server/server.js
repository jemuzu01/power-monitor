import express from 'express';  
import { collection, addDoc } from 'firebase/firestore';  
import { firestore } from '../src/firebase/firebase.js'; 

const PORT = 5000;
const app = express();

// Middleware to parse JSON body
app.use(express.json());  // Add this

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.post("/api/add-user", async (req, res) => {
    try {
      const { name, age, city } = req.body;

      const usersCollection = collection(firestore, "users");
  
      const docRef = await addDoc(usersCollection, { name, age, city });
  
      res.status(200).json({ message: "User added", id: docRef.id });
    } catch (error) {
      console.error("Error adding document:", error);
      res.status(500).json({ error: "Failed to add user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
