const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v); // starts with 6-9 and 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit mobile number starting with 6-9`
    }
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^([a-zA-Z0-9_.+-]+)@gmail\.com$/.test(v); // only gmail.com
      },
      message: props => `${props.value} is not a valid Gmail address`
    }
  },
  city: { 
    type: String, 
    required: [true, 'City is required'] 
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'] 
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
