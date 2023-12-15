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

//login signup sarah
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("signup", userSchema);

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists in the database
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      const newUser = new UserModel({ email, password });
      await newUser.save();
      res.json({ message: "Signup successful", user: newUser });
    } else {
      res.status(409).json({
        error: "User already exists with this email",
      });
    }
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database and password matches
    const user = await UserModel.findOne({ email, password });

    if (user) {
      res.json({ message: "Login successful", user });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
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

app.get("/userProfile", async (req, res) => {
  try {
    const lawyers = await LawyerModel.find();
    res.json(lawyers);
    console.log(lawyers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
  custodyFirstDate: {
    type: String,
  },

  courtStatus: {
    type: String,
  },
  assignedLawyer: {
    type: String,
  },
  court: {
    type: String,
  },
  judge: {
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
      custodyFirstDate,
      courtStatus,
      assignedLawyer,
      court,
      judge,
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
      custodyFirstDate,
      courtStatus,
      assignedLawyer,
      court,
      judge,
    });

    await utp.save();
    console.log("Inserted UTP data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting UTP data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/utpProfile", async (req, res) => {
  try {
    const utps = await UTPModel.find();
    res.json(utps);
    console.log(utps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/userProfile", async (req, res) => {
  try {
    const lawyers = await LawyerModel.find();
    res.json(lawyers);
    console.log(lawyers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//check ID
app.post("/checkCaseID", async (req, res) => {
  try {
    const { caseID } = req.body;

    // Check if caseID already exists
    const existingUtp = await UTPModel.findOne({ caseID });

    if (existingUtp) {
      // CaseID already exists, send a response indicating that
      res.json({ exists: true });
    } else {
      // CaseID does not exist
      res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking CaseID:", error);
    res.status(500).json({ error: "Internal Server Error" });
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

app.get("/counselorProfile", async (req, res) => {
  try {
    const counselors = await UTPModel.find();
    res.json(counselors);
    console.log(counselors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define NGO schema
const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  darpanId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
  },
  location: {
    type: String,
  },
  services: {
    type: String,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
});

// Create NGO model
const NGOModel = mongoose.model("NGO", ngoSchema);

// Route for handling NGO profile creation
app.post("/ngoProfile", async (req, res) => {
  try {
    const {
      name,
      darpanId,
      email,
      password,
      confirmPassword,
      contactNumber,
      location,
      services,
      yearsOfExperience,
    } = req.body;

    // Create a new instance of NGOModel
    const ngo = new NGOModel({
      name,
      darpanId,
      email,
      password,
      confirmPassword,
      contactNumber,
      location,
      services,
      yearsOfExperience,
    });

    // Save the NGO profile to the database
    await ngo.save();

    console.log("Inserted NGO data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting NGO data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/ngoProfile", async (req, res) => {
  try {
    const NGOS = await NGOModel.find();
    res.json(NGOS);
    console.log(NGOS);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "NGO Server Error" });
  }
});

const utrcsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// Create  model
const UTRCSModel = mongoose.model("UTRCS", utrcsSchema);

// Route for handling UTRCS profile creation
app.post("/utrcsProfile", async (req, res) => {
  try {
    const { name, location } = req.body;

    // Create a new instance of UTRCSModel
    const utrcs = new UTRCSModel({
      name,
      location,
    });

    // Save the UTRCS profile to the database
    await utrcs.save();

    console.log("Inserted UTRCS data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting UTRCS data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/utrcsProfile", async (req, res) => {
  try {
    const utrcs = await UTRCSModel.find();
    res.json(utrcs);
    console.log(utrcs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const legalClinicSchema = new mongoose.Schema({
  // Define your Legal Clinic schema fields here
  name: {
    type: String,
    required: true,
  },

  ID: {
    type: String,
    required: true,
  },
  operationalHours: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});
const LegalClinicModel = mongoose.model("LegalClinic", legalClinicSchema);
app.post("/legalProfile", async (req, res) => {
  try {
    const { name, ID, operationalHours, location } = req.body;

    // Create a new instance of UTRCSModel
    const legal = new LegalClinicModel({
      name,
      operationalHours,
      location,
      Id,
    });

    // Save the UTRCS profile to the database
    await legal.save();

    console.log("Inserted Clinic data");
    res.send("ok");
  } catch (error) {
    console.error("Error inserting Clinic data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/legalProfile", async (req, res) => {
  try {
    const legalClinics = await LegalClinicModel.find();
    res.json(legalClinics);
    console.log(legalClinics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
