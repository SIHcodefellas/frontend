const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://missriyajaiswal251003:5ZhLZ29OmbKrxmbx@cluster0.vbj3zsa.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to db"))
  .catch((error) => console.error("MongoDb " + error));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const lawyerSchema = new mongoose.Schema({
  // Define your Lawyer schema fields here
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  meetLink: {
    type: String,
  },
  AOR: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  passWord: {
    type: String,
    required: true,
  },
  confirmpassWord: {
    type: String,
    required: true,
  },
});

const LawyerModel = mongoose.model("User", lawyerSchema);

app.post("/userProfile", async (req, res) => {
  try {
    const {
      name,
      specialization,
      experience,
      email,
      meetLink,
      AOR,
      location,
      phoneNumber,
      passWord,
      confirmpassWord,
    } = req.body;

    const user = new LawyerModel({
      name,
      specialization,
      experience,
      email,
      meetLink,
      AOR,
      location,
      phoneNumber,
      passWord,
      confirmpassWord,
    });

    await user.save();
    console.log("Inserted Lawyer data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting Lawyer data:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define UTP schema outside the route handler
const utpSchema = new mongoose.Schema({
  // Define your UTP schema fields here
  caseID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  setPassword: {
    type: String,
    required: true,
  },
  confirmPassWord: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
  },
  location: {
    type: String,
  },
  lawyerName: {
    type: String,
  },
  offence: {
    type: String,
  },
});

const UTPModel = mongoose.model("UTP", utpSchema);
app.post("/utpProfile", async (req, res) => {
  try {
    const {
      caseID,
      name,
      setPassword,
      confirmPassWord,
      email,
      contactNumber,
      location,
      lawyerName,
      offence,
    } = req.body;

    const utp = new UTPModel({
      caseID,
      name,
      setPassword,
      confirmPassWord,
      email,
      contactNumber,
      location,
      lawyerName,
      offence,
    });

    await utp.save();
    console.log("Inserted UTP data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting UTP data:", error);
    res.status(500).send("Internal Server Error");
  }
});

//counselor
const counselorSchema = new mongoose.Schema({
  ncsID: {
    type: String,
    required: true,
    unique: true,
  },
  experience: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passWord: {
    type: String,
    required: true,
  },
  confirmpassWord: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
  },
  location: {
    type: String,
  },
});
const CounselorModel = mongoose.model("Counselor", counselorSchema);

app.post("/counselorProfile", async (req, res) => {
  try {
    const {
      ncsID,
      experience,
      email,
      passWord,
      confirmpassWord,
      contactNumber,
      location,
    } = req.body;

    const counselor = new CounselorModel({
      ncsID,
      experience,
      email,
      passWord,
      confirmpassWord,
      contactNumber,
      location,
    });

    await counselor.save();
    console.log("Inserted Counselor data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting Counselor data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
