const Contact = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, mobile, email, city, message } = req.body;

    if (!name || !email || !mobile || !city || !message) {
      return res.render('pages/getintouch', {
        error: 'All fields are required'
      });
    }

    const contact = new Contact({ name, mobile, email, city, message });
    await contact.save();

    res.status(200).render('pages/success', { title: 'Success'})
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).send("Something went wrong.");
  }
};



