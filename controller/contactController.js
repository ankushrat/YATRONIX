// const Contact = require('../models/contact');

// exports.submitContactForm = async (req, res) => {
//   try {
//     const { name, mobile, email, city, message } = req.body;

//     if (!name || !email || !mobile || !city || !message) {
//       return res.render('pages/getintouch', {
//         error: 'All fields are required'
//       });
//     }

//     const contact = new Contact({ name, mobile, email, city, message });
//     await contact.save();

//     res.status(200).render('pages/success', { title: 'Success'})
//   } catch (error) {
//     console.error("Error submitting contact form:", error);
//     res.status(500).send("Something went wrong.");
//   }
// };
const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, mobile, city, message } = req.body;

    //  Validate
    if (!name || !email || !mobile || !city || !message) {
      return res.render('pages/getintouch', {
        error: 'All fields are required'
      });
    }

    //  Save to MongoDB
    const newContact = new Contact({ name, email, mobile, city, message });
    await newContact.save();

    // ✅ Step 3: Send email to YOURSELF
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL, // your email
        pass: process.env.EMAIL_PASSWORD            //  Gmail App Password
      }
    });

    const mailOptions = {
      from: process.env.ADMIN_EMAIL, //  Sender 
      to: process.env.ADMIN_EMAIL,   //  Receiver 
      subject: 'New User Registration Received',
      html: `
        <h3>New Registration</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <small>This was auto-generated from your website form.</small>
      `
    };

    await transporter.sendMail(mailOptions);

    //  Show success page
    res.status(200).render('pages/success', { title: 'Registration Successful' });

  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Something went wrong.");
  }
};



