// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// require("dotenv").config();


// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// // Create Mongoose schema
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   subject: String,
//   message: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Contact = mongoose.model("Contact", contactSchema);

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // your app email
//     pass: process.env.EMAIL_PASS  // app password
//   }
// });

// // Routes
// app.post("/api/contact", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ msg: "All fields are required" });
//   }

//   try {
//     // Save to MongoDB
//     const newContact = new Contact({ name, email, subject, message });
//     await newContact.save();

//     // Send notification email from app
//     const mailOptions = {
//       from: process.env.EMAIL_USER,    // email comes from your app
//       to: process.env.NOTIFY_EMAIL,    // you receive the email
//       replyTo: email,                  // reply goes to the user
//       subject: `New Contact Form Submission: ${subject}`,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ msg: "Form submitted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: "https://portfolio-1lr4.vercel.app", // Replace with your deployed frontend URL
  methods: ["GET", "POST"]
}));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Create Mongoose schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send notification email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: "Form submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
